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
        cityLon = unpack(rows, 'lon');

    var eventYears = [...new Set(eventYear)];
    var colorscale = [
        '#393536',
        '#613032',
        '#812c2f',
        '#a0272c',
        '#c52228',
        '#ed1c24'
    ];

    var traces = eventYears.flatMap((year, index) => {
        var filteredRows = rows.filter(row => row['event year'] === year);
        var filteredEventNames = unpack(filteredRows, 'Event Name'),
            filteredParticipantsNo = unpack(filteredRows, 'Number of participants'),
            filteredLocations = unpack(filteredRows, 'Location (city, state)'),
            filteredCityLat = unpack(filteredRows, 'lat'),
            filteredCityLon = unpack(filteredRows, 'lon'),
            sizes = filteredParticipantsNo.map(p => p / 2),
            hoverTexts = [];

        for (var i = 0; i < filteredEventNames.length; i++) {
            var hoverText =
                filteredEventNames[i] +
                '<br> Event Year: ' +
                year +  // use the year from the loop
                '<br> Number of Participants: ' +
                filteredParticipantsNo[i] +
                '<br> Location: ' +
                filteredLocations[i];
            hoverTexts.push(hoverText);
        }

        return [
            {
                // Actual data trace
                type: 'scattergeo',
                mode: 'markers',
                lat: filteredCityLat,
                lon: filteredCityLon,
                hoverinfo: 'text',
                hovertext: hoverTexts,
                showlegend: false,
                geo: 'geo',
                legendgroup: 'year' + year,
                marker: {
                    color: colorscale[index % colorscale.length],
                    size: sizes,
                },
                xaxis: 'x',
                yaxis: 'y',
            },
            {
                // Legend trace
                type: 'scattergeo',
                mode: 'markers',
                lat: [90], // latitude off the visible area
                lon: [0],
                name: year.toString(),
                showlegend: true,
                legendgroup: 'year' + year,
                geo: 'geo',
                marker: {
                    color: colorscale[index % colorscale.length],
                    size: 10, // constant size for legend
                },
                xaxis: 'x',
                yaxis: 'y',
            },
        ];
    });

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
    };

    var layout = {
        showlegend: true,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa',
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

    var config = { responsive: true };

    Plotly.newPlot('eventMap', traces, layout, config);
    Plotly.newPlot('eventTable', [tableTrace], {}, config);
});
