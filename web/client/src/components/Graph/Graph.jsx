import React, { Fragment } from 'react';
import Plot from 'react-plotly.js';


function Graph(props) {
    return(
      <Fragment>
        <Plot
          data={props.data}
          layout={props.layout}
          onUpdate={props.updateHandler}
        />
      </Fragment>
    );
}


export default Graph;