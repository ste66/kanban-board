
import React, { Component } from 'react'

 class finished extends Component {
    render() {
        const item = this.props.item;

        return (
            <div  className="finished">
                
            <p>{item.text}</p>

                    {/* Button */}
                    <div className="actions" >

                        <button onClick={() =>this.props.onStatusChange (item.id) } >&#128076;</button>

                    </div>
        </div>



        )
    }
}
export default finished;