import React from 'react';
import Plot from 'react-plotly.js';
import Layout from '../Layout/Layout';
import GraphRand from '../GraphRand/GraphRand';
import Graph from '../Graph/Graph';
import './App.scss';

class App extends React.Component {

  state = {
    graph: [
      {
        name: 'Data line',
        x: [1.5, 2.2, 2.5, 2.8, 3.2, 3.8,  3.4, 4.6],
        y: [14, 15, 18, 17.4, 15, 17.7, 19, 21],
        mode: 'markers',
        marker: {
          color: 'rgb(219, 64, 82)',
          size: 12
        },
        line: {
          color: 'rgb(128, 0, 128)',
          width: 1
        }
      }
    ],
    regression_line: {},
    count: 0
  }

  rand = () => parseInt(Math.random() * 10 + this.state.count, 10);

  tryRegressionLine = () => {

    const dataPlot = {
      regression_line: {
          name: 'Regression line',
          x: [1.5, 4.5],
          y: [14, 20],
          mode: 'lines+markers',
          marker: {
            color: 'rgb(219, 64, 82)',
            size: 12
          },
          line: {
            color: 'rgb(128, 0, 128)',
            width: 1
          }
      }
    }
    
    this.setState({
      graph: [this.state.graph[0], dataPlot.regression_line],
      count: this.state.count+1
    })
  }

  updateHandler = () => {
    console.log('UPDATED')
  }

  render() {
     
    return (
      <Layout>

        <Graph
          data={this.state.graph}
          layout={{title: 'Linear Regression'}}
          onUpdate={this.updateHandler}
        />

          <div>
            <button onClick={this.tryRegressionLine}>Try regression line ({this.state.count})</button>
          </div>

        <GraphRand />
   
      </Layout>
    );
  }

}

export default App;
