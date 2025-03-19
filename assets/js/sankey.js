document.addEventListener("DOMContentLoaded", function () {
    // Node names
    var labels_v1 = [
        "OpenDeId Corpus", "OpendDeId v1", "OpendDeId v2",
        "SHI Recognition", "Name", "Patient", "Doctor",
        "Location", "Room", "Department", "Hospital", "Organization", "Street",
        "City", "State", "Country", "Zip", "Other",
        "Age", "Date",
        "Contact", "Phone", "ID", "Medical Record", "BioID", "IDNum",
        "SHI Recognition", "SHI Normalization"
    ];

    var source_v1 = [0, 0, 1, 3, 3, 4, 4, 7, 7,  7, 7,  7, 7,  7, 7,  7, 7,  3, 3,  3, 20, 3, 22, 22, 22];
    var target_v1 = [1, 2, 3, 4, 7, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
    var values_v1 = [38414, 9971, 38414, 11789, 9861, 2118, 9671, 1, 1840, 1952, 5, 1492, 1566, 1463, 4, 1519, 19, 141, 7665, 7, 7, 8951, 2090, 1, 6860];

    var labels_v2 = [
        "Name", "Patient", "Doctor",
        "Location", "Room", "Department", "Hospital", "Organization", "Street",
        "City", "State", "Country", "Zip", "Other",
        "Age",
        "Date", "Date", "Time", "Duration", "Set",
        "Contact", "Phone", "URL",
        "ID", "Medical Record", "BioID", "IDNum",
        "Date", "Time", "Duration", "Set"
    ];

    var source_v2 = [5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23, 24, 25, 2, 26, 26, 26, 26, 26, 26, 28, 28, 31, 31, 31, 31, 31,
        31, 31, 31, 31, 31, 43, 43, 43, 43, 48, 48, 51, 51, 44, 45, 46, 47, 27, 27, 27, 27];
    
    var target_v2 = [2, 2, 2, 2, 2,  2, 2,  2, 2,  2, 2,  2, 2,  2, 2,  2, 2,  2, 26, 28, 31, 42, 43, 48, 51, 29, 30, 32, 33, 34, 35, 36,
        37, 38, 39, 40, 41, 44, 45, 46, 47, 49, 50, 52, 53, 27, 27, 27, 27, 55, 56, 67, 58];
    
    var values_v2 = [2118, 9671, 1, 1840, 1952, 5, 1492, 1566, 1463, 4, 1519, 19, 141, 7665, 7, 2090, 1, 6860, 48385,
        15139, 11978, 235, 10903, 22, 10108, 3080, 12059, 1, 1810, 3592, 233, 1564,
        1649, 1517, 5, 1591, 16, 8834, 2009, 41, 19, 12, 10, 3134, 6974, 8834, 2009, 41, 19, 8834, 2009, 41, 19];

    // Combine v1 and v2 data
    var labels_v3 = labels_v1.concat(labels_v2);
    var source_v3 = source_v1.concat(source_v2);
    var target_v3 = target_v1.concat(target_v2);
    var values_v3 = values_v1.concat(values_v2);

    // Create the Sankey diagram
    var data = [{
        type: "sankey",
        node: {
            pad: 30,
            thickness: 10,
            line: {
                color: "black",
                width: 0.5
            },
            label: labels_v3
        },
        link: {
            source: source_v3,
            target: target_v3,
            value: values_v3
        }
    }];

    var layout = {
        title: "OpenDeid Corpus",
        font: { size: 10 }
    };

    Plotly.newPlot('opendeid-sankey', data, layout);
});
