import React from 'react';
import axios from 'axios';

class Form extends React.Component
{

    constructor(props){
        super(props);
        this.state ={

            username:"",
            password:"",
            displayname:"",

        }
    }  

    inputSet = (e)=>
    {
        this.setState( { [e.target.name] : e.target.value }  )
    }
    register = (e)=>
    {
        e.preventDefault(); // prevent default submit operation , beacause using ajax for submission
        var dat = {
            username : this.state.username,
            password : this.state.password,
            displayname : this.state.displayname,
        };
        axios.post("http://localhost/API/reactapi.php", dat).then(response=> {
            // alert(response);
            if(response.data=="success"){
              //  alert("Saved")
                document.getElementById("responsetext").innerHTML ="Success"

            }
            else{
               // alert("error")
               document.getElementById("responsetext").innerHTML = "Error"
            }
          
        })
      
    }



    render()
    {
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

            <h3 className="text-success" id="responsetext"></h3>
          
            <p>{this.state.username}</p>
            <p>{this.state.password}</p>
            <p>{this.state.displayname}</p>
        
            
            </form>

            </div>


        )
    }
}

export default Form;