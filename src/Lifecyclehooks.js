import React from 'react';

class Lifecyclehooks extends React.Component
{

   //Component Levels:- MOUNT, UPDATE, UNMOUNT

    constructor(props)
    {
        super(props);
        console.log("constructor triggered");
        this.state = {
            counter:0
        }

    }

    componentWillMount()
    {
        console.log("Inside component will mount");
    }

    increment= ()=>
    {
        this.setState( (prev, prop)=>({counter:prev.counter+1}) )
    }
  

    render(){
            console.log("Inside render method");
        return(
            <div>
            <button onClick={this.increment}>Increment</button>
            <h3>You have clicked {this.state.counter} times</h3>
            </div>

        )
    }
    componentDidMount()
    {
        console.log("Inside component did mount");
    }
    componentWillUpdate()
    {
        console.log("Inside component will update");
    }
    componentDidUpdate()
    {
        console.log("Inside component did update");
    }
    shouldComponentUpdate()
    {
     return true // if it is false component will not execute
    }
    componentWillUnmount()
    {
        
    }


}



export default Lifecyclehooks;