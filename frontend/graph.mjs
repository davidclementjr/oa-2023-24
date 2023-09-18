const graphDiv = document.getElementById("graph")

    fetch(

    "https://oa-2023-24-backend.onrender.com"

).then(async res => {

    const data = await res.json(); // parse the JSON response

    Plotly.newPlot( graphDiv, [{ 
        x: data.x, 
        y: data.y, 
        type: 'line', 
        line: {
            color: 'blue', 
            width: 2
        }
    }]);

});
})

