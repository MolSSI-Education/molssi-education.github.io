---
title: Map
layout: default
---

<div id='eventMap'><!-- Plotly chart will be drawn inside this DIV --></div>

<script>
Plotly.d3.csv('./assets/events.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var cityName = unpack(rows, 'name'),
        cityEventsFreq = unpack(rows, 'frq'),
        cityLat = unpack(rows, 'lat'),
        cityLon = unpack(rows, 'lon'),
        color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
        citySize = [],
        hoverText = [];
        scale = 10;

    for ( var i = 0 ; i < cityEventsFreq.length; i++) {
        var currentSize = cityEventsFreq[i]*scale;
        var currentText = cityName[i] + " Events Frequency: " + cityEventsFreq[i];
        citySize.push(currentSize);
        hoverText.push(currentText);
    }

    var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: cityLat,
        lon: cityLon,
        hoverinfo: 'text',
        text: hoverText,
        marker: {
            size: citySize,
            line: {
                color: 'black',
                width: 2
            },
        }
    }];

    var layout = {
        title: 'MolSSI Events Map',
        showlegend: false,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 10,
            subunitcolor: 'rgb(255,255,255)',
            countrycolor: 'rgb(255,255,255)'
        },
    };

    Plotly.newPlot("eventMap", data, layout, {showLink: false});

});


</script>