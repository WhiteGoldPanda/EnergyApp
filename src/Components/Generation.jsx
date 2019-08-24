import React, { Component } from 'react'



export default class Generation extends Component {
    

    render() {
        return (
      
            
            <section >
                <section >
                <h3>Generation Mix</h3>
            <p >Data available via the /generation route. Data with 0 value has been omitted.</p>
            <hr></hr>
                    <table >
                        <thead>
                            <tr>
                                <th>Fuel</th>
                                <th>Percent</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.generation.map(item => {
                                if (item['perc'] > 0) {
                                return (
                                    <tr key={item['fuel']}>
                                        <td>{item['fuel']}</td>
                                        <td className="customcode">{item['perc']}</td>
                                    </tr>
                                )}
                            })}
                        </tbody>
                    </table>
                </section>
        
            </section>
   
        )
    }
}
