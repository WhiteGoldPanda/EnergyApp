import React, { Component } from 'react'


export default class Factor extends Component {



    render() {
        return (
 
                <section >
                <h3>Intensity Factors</h3>
                
            <hr></hr>
              {this.props.intensity_factors.map(item => {
                return <table >
                  <thead>
                    <tr>
                      <th>Factor</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                  {Object.entries(item).map(entry => { 
                    if (entry[1] > 0) {
                        return (
                          <tr>
                          <td>{entry[0]}</td>
                          <td>{entry[1]}</td>
                        </tr>)}
                    
                  })}
                  </tbody>
                </table>
          
              })}
              <hr/>
                </section>

        )
    }
}
