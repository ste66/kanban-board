import React, { Component } from 'react'

import Backlog from "./backlog"
// import {Button} from "react-bootstrap"


class backlogMap extends Component {

    constructor(props) {
        super(props);
        this.state = {value:"" };
          this.handleNewTask = this.handleNewTask.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleNewTask(event) {
         /* The target event property returns the element that triggered the event. Input! */
        this.setState({value : event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleAddTask(this.state.value);
        this.setState({value:""   });
    }

    render() {

        const backlog = this.props.items;
        // const {item,handleChange,deleteChange} = this.props;
        // const {items1, handleChange1} =this.props

        // const backlogItems = items1.map ( el => {
            const backlogItems =   backlog.map ( el => {
        return (  
            <Backlog
                       item = {el}   
                        onStatusChange={this.props.handleChange}
                        // onStatusChange={this.props.handleChange1}
                  
                           key={el.id}
                        ></Backlog>                 
                 );
                 });
            
                        return (
                            <div className= "backlog-container">
                   
                 <h1 className="kanBan">KANBAN BOARD</h1> 
                            <form className="backlog-form" onSubmit={this.handleSubmit} >
                            <label className="input-item">
                                    <input 
                                    type= "text"
                                    name = "backlog"
                                    value = {this.state.value}
                                   onChange = {this.handleNewTask}/>
                                    </label>        

                        <input className="btn" type="submit" value="Task"/>
                                        </form>
                 
                                    <div className="backlog1">
                                    <h1>Backlog</h1>
                                    {backlog.length > 0 && backlogItems}
                                    </div>
                                    </div>
                                    );
                                    }
                                    }
                                    
export default backlogMap;



