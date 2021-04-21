
import './App.scss';
import React, { Component } from 'react'

import BacklogMap from "./components/backlog/backlogMap"
import ProgressMap from "./components/InProgress/progressMap"
import FinalStageMap from "./components/finalStage/finalStageMap"
import Finished from "./components/finished/finishedMap"


class App extends Component {
            // State Constructor Method
            constructor (props) {
              super(props)
              this.state = {
              items: [
                  {id:1, text:"Bug1", done:1},
                  {id:2, text:"Bug2", done:1},
                  {id:3, text:" Feature1",done:1},
                  {id:4, text:"Feature2", done:1},
                  {id:5, text:"Bug3", done:1},
                  // {id:6, text:"Feature2", done:2},
                  // {id:7, text:"Feature2", done:2},
                  // {id:8, text:"Bug4", done:3},
                ],
              };
              };

              // Step 1: Define Add Function
              addBacklog = value => {

              // Step 1.1 : Define New Object!
              const newItem = {
              id: this.state.items.length+1,
              text : value,
              done: 1
            };
          console.log(newItem);
          console.log(this.state.items.length)

          // Step 1.2 : Use items Object with the previous one to create new Array
            this.setState({
          items:[...this.state.items, newItem] // => [{id: this.state.items.length ,task: value ,done: 1}]
                  });
            console.log(this.state.items);
              };
        /* ========================1ST=Update Backlog==================================== */
        updateBacklog1 = id => {
                   // We need to toggle the status of the (items) with `id`.
          const items = this.state.items.map( item=> {

          if(item.id === id ){
            // item.done= !item.done
              item.done = 2;
              return item;
          } else return item;        
          });

          this.setState({items});
        };
        /* ========================2ND=Update Backlog==================================== */
                  updateBacklog2 = id => {
                    // We need to toggle the status of the kanBan with `id`.
          let items = this.state.items.map( item=> {

          if(item.id === id ){
            // arrOfBacklog.done= !arrOfBacklog.done
            item.done = 3;
              return item;
          } else return item;        
          });

          this.setState({items});
          };

/* ========================3RD=Update Backlog==================================== */
          updateBacklog3 = id => {
            // We need to toggle the status of the kanBan with `id`.
          let items = this.state.items.map( item=> {

          if(item.id === id ){
          item.done = 4;
          return item;
          } else return item;        
          });

          this.setState({items});
          };
/* ========================3RD=Update Backlog==================================== */
updateBacklog4 = id => {
  // We need to toggle the status of the kanBan with `id`.
let items = this.state.items.map( item=> {

if(item.id === id ){
item.done = 5;
return item;
} else return item;        
});

this.setState({items});
};

/* ====================================================== */
  /* Create a function to delete items */

// deleteTask = (myTask)=>{

//   console.log(myTask);

//   const taskIndex = this.state.items.findIndex((t)=>{

//     console.log(t); 

//     return myTask === t;
//   })

//   let newTask = [...this.state.items];
//   newTask.splice(taskIndex,1);

//   // start from Mango and delete 2 items after
//   // newFruits.splice(1, 2);

//   this.setState({
//     items : newTask
//   });


// }


          render() {


       const backlog = this.state.items.filter(el => el.done === 1);
       const progress = this.state.items.filter(el => el.done ===2);
       const finalStage = this.state.items.filter(el=> el.done === 3);
       const finished = this.state.items.filter(el=>  el.done === 4);


            return (
              <div className= "app">
                    <BacklogMap items={backlog} handleChange={this.updateBacklog1} handleAddTask={this.addBacklog} deleteChange={this.deleteTask}/>
                    <ProgressMap items = {progress} handleChange={this.updateBacklog2} /> 
                    <FinalStageMap items = {finalStage} handleChange={this.updateBacklog3}/>
                    <Finished items = {finished} handleChange={this.updateBacklog4}/>

                    {/* <BacklogMap items1={backlog} handleChange1={this.updateBacklog1} handleAddTask={this.addBacklog}/>
                    <ProgressMap items2 = {progress} handleChange2={this.updateBacklog2} />
                    <FinalStageMap items3 = {finalStage} handleChange3={this.updateBacklog3}/>
                    <Finished items4 = {finished} handleChange4={this.updateBacklog4}/> */}

             

              </div>
            )
          }
        }
        export default App;
