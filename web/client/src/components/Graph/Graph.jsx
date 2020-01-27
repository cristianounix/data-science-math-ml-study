import React from 'react';
import Plot from 'react-plotly.js';


function Graph(props) {

    return(
        <Plot
          data={props.data}
          // layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
          layout={props.layout}
          onUpdate={this.updateHandler}
        />
    );
}


export default Graph;