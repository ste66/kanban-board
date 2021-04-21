
import React, { Component } from 'react'


 class finalStage extends Component {
    render() {
        const item = this.props.item;

        return (
            <div  className="finalStage">
                
            <p>{item.text}</p>

                    {/* Button */}
                    <div className="actions" >

                        <button onClick={() =>this.props.onStatusChange (item.id) } >&#128073;</button>

                    </div>
        </div>



        )
    }
}
export default finalStage;