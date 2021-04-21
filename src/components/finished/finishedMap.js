
import React, { Component } from 'react'

import Finished from "./finished"


class finishedMap extends Component {
    render() {   
        
        const finished = this.props.items;
        // const {items4, handleChange4} =this.props
    
        // const finishedItems = items4.map(el => {
          const finishedItems = finished.map(el => {
          return (
            <Finished
              item={el}
              key={el.id}
              // onStatusChange={this.props.handleChange4}
              onStatusChange={this.props.handleChange}
            ></Finished>
          );
        });
    
        return (
          <div className="finished-container">
         
            <div>
              <h1>Finished</h1>
              { finishedItems}
            </div>
          </div>
            )
        }
    }
    
    
export default finishedMap;