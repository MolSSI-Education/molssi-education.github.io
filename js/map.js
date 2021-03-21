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
		hoverTexts = [];

	for (var i = 0; i < eventNames.length; i++) {
		var hoverText =
			eventNames[i] +
			'\n Event Year: ' +
			eventYear[i] +
			'\n Number of Participants: ' +
			participantsNo[i] +
			'\n Location: ' +
			locations[i];

		hoverTexts.push(hoverText);
	}
	console.log({ eventNames, eventYear, locations, hoverTexts });

	var data = [
		{
			type: 'scattergeo',
			mode: 'markers',
			locationmode: 'USA-states',
			name: eventNames,
			lat: cityLat,
			lon: cityLon,
			hovertext: hoverTexts,
			hoverinfo: 'name+text',
			marker: {
				size: participantsNo,
				colorscale: [
					'#393536',
					'#613032',
					'#812c2f',
					'#a0272c',
					'#c52228',
					'#ed1c24',
				],
				line: {
					width: 2,
					color: 'rgb(237, 28, 36)',
				},
				color: eventYear,
				colorbar: {
					title: 'Event Year',
				},
			},
		},
	];

	var layout = {
		title: 'MolSSI Events Map',
		showlegend: false,
		height: 1000,
		width: 1200,
		geo: {
			scope: 'world',
			projection: {
				type: 'equirectangular',
			},
			showland: true,
			landcolor: 'rgb(217, 217, 217)',
			showcountries: true,
			showsubunits: true,
			subunitwidth: 1,
			subunitcolor: 'rgb(255,255,255)',
			countrycolor: 'rgb(255,255,255)',
		},
	};

	Plotly.newPlot('eventMap', data, layout, { showLink: false });
});
