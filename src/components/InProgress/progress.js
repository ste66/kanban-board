import React, { Component } from 'react'



class progress extends Component {

    render() {
        const  item = this.props.item;

        return (
            <div  className="inProgress">
                
                <p>{item.text}</p>

                        {/* Button */}
                        <div className="actions" >

                            <button onClick={() =>this.props.onStatusChange(item.id) } >&#128073;</button>

                        </div>
            </div>
        )
    }
}
export default progress;