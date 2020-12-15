import React from 'react';


class Renderlists extends React.Component
{
  
  

constructor(props)
{
super(props);
this.state = {
    items: [" apple" , "orange" , "Grapes", "Pomogranate"],
    objects : [

        {name : "Sam", age:29},
        {name : "John", age : 33},
        {name : "Yalin", age : 33}

    ]
};

}

render()
{

    /* var lists = this.state.items.map(function(itm, k){

        return <li>{itm}</li>

    }) */

    return(
      /*   <ul>
        {lists}
        </ul> 
        <ul>
        {this.state.items.map(function(itm, k){
            return <li>{itm}</li>    
        })}
        </ul>

        */

        <div>

       <ul>
       {this.state.items.map((itm, k)=> <li key={k}>{itm}</li>)}
       </ul>
      


       <table>
      <tr>
      <th>Name</th>
      <th>Age</th>
      </tr>
      {
          this.state.objects.map((itm,k)=>{
            return (
                <tr>
                <td>{itm.name}</td>
                <td>{itm.age}</td>               
               </tr>
            )

          })
      }
      </table>

      </div>

    )

}


}


export default Renderlists;