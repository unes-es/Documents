import React, { Component } from "react";
import Plot from "react-plotly.js";
export default class PlotExemple extends Component {
  render() {
    return (
      <Plot
        staticPlot="true"
        data={[
          {
            values: [19, 26, 55],
            labels: ["Residential", "Non-Residential", "Utility"],
            type: "pie",
          },
        ]}
        layout={{
          height: 400,
          width: 500,
        }}
      />
    );
  }
}
