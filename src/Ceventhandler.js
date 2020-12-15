import React from 'react';


class Ceventhandler extends React.Component
{

constructor(props)
{
    super(props);
    this.state = {
        counter:0,
        enable:false,
        textcontent:"nothing",       
    };
}


    increment=()=>{
   this.setState( (prev, props) =>
   (
     {counter:prev.counter+1} 
   ));
    }

    decrement=()=>
    {
        this.setState( (prev, props) => ({counter:prev.counter-1}) )
    }
    checkClicked=()=>
    {
        this.setState( (prev, props) => ({ 

            enable:!prev.enable

        }))
    }
    textchangeEvent=(e)=>{
        this.setState( {textcontent:e.target.value} )
    }

    render()
    {
        return(
            <div>
            <button onClick={ this.increment }>+</button>
            <button onClick={ this.decrement }>-</button>
            <p> You have clicked {this.state.counter} times</p>


            <label>
            enable
            <input type="checkbox" onClick={this.checkClicked} />
            </label>

            <p> It is {this.state.enable?"Enabled":"Disabled"} </p>


            <input type="text"    onChange={this.textchangeEvent}  /><br />
            <h3>{this.state.textcontent}</h3>

            </div>

        )
      
    }
}

export default Ceventhandler;