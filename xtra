const graphDiv = document.getElementById("graph");

fetch("spotify-2023.csv")
  .then(async res => {
    const data = await res.text();
    const parsedData = Papa.parse(data, { header: true }).data;
    
    const x = parsedData.map(row => row.x); // Replace 'x' with the actual column name containing x-axis values
    const y = parsedData.map(row => row.y); // Replace 'y' with the actual column name containing y-axis values
    
    Plotly.newPlot(graphDiv, [
      {
        x: x,
        y: y,
        type: "line",
        line: {
          color: "blue",
          width: 2
        }
      }
    ]);
});
