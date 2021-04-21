import React, { Component } from 'react'

import FinalStage from "./finalStage"


class finalStageMap extends Component {
    render() {   
        
        const finalStage = this.props.items;
        // const {items3, handleChange3} =this.props
    
        const finalStageItems = finalStage.map(el => {
        // const finalStageItems = items3.map(el => {
          return (
            <FinalStage
              item={el}
              key={el.id}
              // onStatusChange={this.props.handleChange3}
              onStatusChange={this.props.handleChange}
            ></FinalStage>
          );
        });
    
        return (
          <div className="FinalStage-container">
         
            <div className="todos">
              <h1>Final Stage</h1>
              { finalStageItems}
            </div>
          </div>
            )
        }
    }
    
     
export default finalStageMap;