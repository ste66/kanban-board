
import React, { Component } from 'react'



 class backlog extends Component {
    render() {

        // const item =this.props.item;
        const {item} = this.props;

        return (
            <div className = "backlog-item">

            <p>{item.text}</p>

                         {/* Button */}
            <div className="actions">
               <button  onClick={ () => this.props.onStatusChange(item.id) } > &#128073;</button>
               {/* Delete */}
               {/* <div className="actions">
                    <button
                        className="btn"
                        onClick={() => this.props.onDeleteChange(item.id)}
                    >
                        &#10006;
                    </button>
                    </div>*/}

                    
               </div> 
              
            </div>
        )
    }
}
export default backlog;