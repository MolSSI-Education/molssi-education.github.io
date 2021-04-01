Plotly.d3.csv('./assets/education-events.csv', function (err, rows) {
	function unpack(rows, key) {
		return rows.map(function (row) {
			return row[key];
		});
	}

	var eventNames = unpack(rows, 'Event Name'),
		participantsNo = unpack(rows, 'Number of participants'),
		eventYear = unpack(rows, 'event year'),
		locations = unpack(rows, 'Location (city, state)'),
		cityLat = unpack(rows, 'lat'),
		cityLon = unpack(rows, 'lon'),
		hoverTexts = [],
		sizes = [];

	for (var i = 0; i < eventNames.length; i++) {
		var hoverText =
			eventNames[i] +
			'<br> Event Year: ' +
			eventYear[i] +
			'<br> Number of Participants: ' +
			participantsNo[i] +
			'<br> Location: ' +
			locations[i];
		var size = participantsNo[i] / 2;
		hoverTexts.push(hoverText);
		sizes.push(size);
	}
	console.log({ eventNames, eventYear, locations, hoverTexts });

	var mapTrace = {
		type: 'scattergeo',
		mode: 'markers',
		lat: cityLat,
		lon: cityLon,
		hoverinfo: 'text',
		hovertext: hoverTexts,
		locationmode: 'world',
		geo: 'geo',
		marker: {
			color: eventYear,
			colorscale: [
				[0, '#393536'],
				[0.2, '#393536'],
				[0.2, '#613032'],
				[0.4, '#613032'],
				[0.4, '#812c2f'],
				[0.6, '#812c2f'],
				[0.6, '#a0272c'],
				[0.8, '#a0272c'],
				[0.8, '#c52228'],
				[1.0, '#c52228'],
				[1.0, '#ed1c24'],
			],
			// colorbar: {
			// 	tickmode: 'array',
			// 	tickvals: [2017, 2018, 2019, 2020, 2021],
			// 	ticktext: ['2017', '2018', '2019', '2020', '2021'],
			// },
			size: sizes,
		},
		xaxis: 'x',
		yaxis: 'y',
	};
	var tableContent = [
		eventNames.reverse(),
		eventYear.reverse(),
		locations.reverse(),
		participantsNo.reverse(),
	];

	var tableTrace = {
		type: 'table',
		columnwidth: [30, 10, 25, 30],
		header: {
			values: [
				['<br>Event Name</br>'],
				['<br>Year</br>'],
				['<br>Location</br>'],
				['<br>No. of Participants</br>'],
			],
			align: 'center',
			line: { width: 1, color: 'black' },
			fill: { color: 'grey' },
			font: { family: 'Arial', size: 12, color: 'white' },
		},
		cells: {
			values: tableContent,
			align: ['left', 'center'],
			line: { color: 'black', width: 1 },
			font: { family: 'Arial', size: 12, color: ['black'] },
		},
		xaxis: 'x2',
		yaxis: 'y2',
		domain: { x: [0.55, 1], y: [0, 1] },
	};
	var data = [mapTrace, tableTrace];

	var layout = {
		title: 'MolSSI Events Map',
		showlegend: false,
		geo: {
			domain: { x: [0, 0.5] },
			scope: 'world',
			projection: {
				type: 'equirectangular',
			},
			showland: true,
			landcolor: 'rgb(217, 217, 217)',
			showcountries: true,
			showsubunits: true,
			subunitwidth: 2,
			subunitcolor: 'rgb(255,255,255)',
			countrycolor: 'rgb(255,255,255)',
		},
	};

	Plotly.newPlot('eventMap', data, layout);
});
