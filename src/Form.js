import React from 'react';
import axios from 'axios';
class Form extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            usernam : "",
            password : "",
            displayname : ""
        }   
    }

    inputSet = (e)=>
    {
       // console.log(e.target.name);
       this.setState({ [e.target.name] : e.target.value })

    }
    register = (e)=>{
      //  alert("clicked");
        e.preventDefault(); // prevent default submit operation , beacause using ajax for submission
       
    }

    render(){
        return(
            <div className="container">
            <h2>Registration</h2>
            <form>
            <div className="form-group">
            <label>User Name</label>
            <input type="text" name="username" className="form-control" onChange={this.inputSet}  />
            </div>
            <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" className="form-control" onChange={this.inputSet}/>
            </div>
            <div className="form-group">
            <label>Display Name</label>
            <input type="text" name="displayname" className="form-control" onChange={this.inputSet}/>
            </div>

            <div className="form-group">          
          <button className="btn btn-primary" onClick = {this.register}>Register</button>
            </div>

            <p>{this.state.username}</p>
            <p>{this.state.password}</p>
            <p>{this.state.displayname}</p>
            
            </form>
            
            
            </div>

        );
    }
   


}

export default Form;