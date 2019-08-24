import React, { Component } from 'react'



export default class Intensity extends Component {
    render() {
        return (
            <div >
                <hr/>
                <div >
                <p>Intensity</p>
            <hr/>
            {this.props.intensity.map(item => {return(
            <React.Fragment>
                <table  >
                
                    <tbody>
                        <tr>
                            <td >{item['from']}</td>
                            <td>----></td>
                            <td>{item['to']}</td>
                        </tr>
                        {Object.entries(item['intensity']).map(entry => {
                            return (<React.Fragment>
                                    <tr >
                                        <td >{entry[0]}</td>
                                        <td >{entry[1]}</td>
                                    </tr>
                                    </React.Fragment>)})}
                    </tbody>
                </table>
            </React.Fragment>)
            })}
                </div>
                <hr/>
            </div>
       
      
        )
    }
}
