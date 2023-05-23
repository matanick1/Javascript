const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'


// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);
}
);

// Demographic Info
function panelInfo(id) {
    d3.json(url).then(function(data) {
        let sampleData  = data;
        let metadata = sampleData.metadata;
        let identifier = metadata.filter(sample => sample.id.toString() === id)[0];
        let panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(identifier).forEach(([key, value]) => {
            panel.append("h6").text(`${key}: ${value}`);
        }
        );
    }
    );
}

// Bar Chart
function barChart(id) {
    d3.json(url).then(function(data) {
        let sampleData  = data;
        let samples = sampleData.samples;
        let identifier = samples.filter(sample => sample.id === id)[0];
        let otu_ids = identifier.otu_ids;
        let otu_labels = identifier.otu_labels;
        let sample_values = identifier.sample_values;
        let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let barData = [
            {
                x: sample_values.slice(0, 10).reverse(),
                y: yticks,
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h"
            }
        ];
        let barLayout = {
            title: "Top 10 OTUs",
            margin: { t: 30, l: 150 }
        };
        Plotly.newPlot("bar", barData, barLayout);
    }
    );
}

// Bubble Chart
function bubbleChart(id) {
    d3.json(url).then(function(data) {
        let sampleData  = data;
        let samples = sampleData.samples;
        let identifier = samples.filter(sample => sample.id === id)[0];
        let otu_ids = identifier.otu_ids;
        let otu_labels = identifier.otu_labels;
        let sample_values = identifier.sample_values;
        let bubbleData = [
            {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                mode: "markers",
                marker: {
                    size: sample_values,
                    color: otu_ids,
                    colorscale: "Earth"
                }
            }
        ];
        let bubbleLayout = {
            title: "OTU ID",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30 }
        };
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    }
    );
}


// Initialize the dashboard
function init() {
    let dropdown = d3.select("#selDataset");
    d3.json(url).then(function(data) {
        let sampleData  = data;
        let names = sampleData.names;
        names.forEach(function(name) {
            dropdown.append("option").text(name).property("value");
        }
        );
        barChart(names[0]);
        panelInfo(names[0]);
        bubbleChart(names[0]);
    }
    );
}

// Update the dashboard
function optionChanged(id) {
    barChart(id);
    panelInfo(id);
    bubbleChart(id);
}

init();


