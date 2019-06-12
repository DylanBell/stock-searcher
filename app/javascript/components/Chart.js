import React      from 'react';
import CanvasJSReact from '../vendor/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Chart extends React.Component {

  render() {
    return (
      <div className="pure-u-1-1 stock-chart-container">
        <CanvasJSChart options= {this.props.options} />
      </div>
    );
  }
}

export default Chart;