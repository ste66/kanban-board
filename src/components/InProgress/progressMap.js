import React, { Component } from 'react'

import Progress from "./progress"


class progressMap extends Component {
    render() {
        const progress = this.props.items;
      // const {items2, handleChange2} =this.props
    
        // const progressItems = progress.map(el => {
          const progressItems = progress.map(el => {
          return (
          
            <Progress
              item={el}
              key={el.id}
              // onStatusChange={this.props.handleChange2}
              onStatusChange={this.props.handleChange}
            ></Progress>
          );
        });
    
        return (
          <div className="progress-container">
            <h1>In Progress</h1>
            { progressItems}
          </div>
        );
      }
    }
    
export default progressMap;