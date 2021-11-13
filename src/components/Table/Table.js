import React from 'react';


const Table = (props) => {
    return (
        <table className="table table-striped table-responsive">
            <thead>
              <tr>
                <th>dt_txt</th>
                <th>humidity</th>
                <th>temp</th>
              </tr>
            </thead>
            <tbody>
              {typeof props.data !== 'undefined' && props.data !== null ? 
              props.data.list.map(cities =>
                <tr key={cities.dt}>
                  <td>{cities.dt_txt}</td>
                  <td>{cities.main.humidity}</td>
                  <td>{cities.main.temp}</td>
                </tr>)
              :null
              
              }
            </tbody>
            
            
          </table>
    )
}

export default Table;