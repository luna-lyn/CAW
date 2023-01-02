import React, { useEffect } from "react";
import "./Likess.css";
class Likess extends React.Component{
    state = {
        likess: 0
    }
    
    handleClickLikess = () =>{
        this.setState({
            likess: this.state.likess +1
        })
    }
   
   
    render(){
        return(
            <div  class="likebtn">
                <button onClick={this.handleClickLikess} >  <span class="heart"> ♥ </span> {this.state.likess} </button>
            </div>
        )
    }
}
export default Likess