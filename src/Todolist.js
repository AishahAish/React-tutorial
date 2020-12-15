import React from 'react';


class Todolist extends React.Component
{

constructor(props)
{
    super(props);
    this.state = {
        items: ["item1", "item2"],
        textContent : ""
    }
};

textChange=(e)=>{
this.setState({textContent:e.target.value});
}

addItem=(e)=>{
  let currentText =  this.state.textContent;
  let currentItems = this.state.items;
  currentItems.push(currentText);
  this.setState({items:currentItems})

}

deleteItem = (i)=>{
    if(!window.confirm("you want to delete ?")){
        return
    }
let currentItems = this.state.items;
currentItems.splice(i,1);
this.setState({items:currentItems});

}

render()
{

    return(

    <div>
    <input type="text" onChange = {this.textChange} />
    <button onClick = {this.addItem}>Add</button>
    <ul>    
    {this.state.items.map((itm, k)=>{
    return(
        <li>{itm} <button onClick = {()=>{this.deleteItem(k)}} >Delete</button></li>
    )
    })
    }
   
    </ul>


    
    </div>

    );


}


}

export default Todolist;