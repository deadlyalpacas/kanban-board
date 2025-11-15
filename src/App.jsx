//importing react's useState hook and the css styles 
import { useState } from 'react' //usestate is a react hook used to manage state
import './styles.css'//importing the styles you previously had in style.css

//defining the App component - this is the main part of your react application 
export default function App(){

  const [items, setItems]= useState([1,2]);

  const add = () => {
    setItems([...items,items.length +1]);
  };

  const remove = () => {
    if (items.length > 0 ){
      setItems(items.slice(0,-1));
    }
  }

  return (

    <div>
      <h1> Hello!</h1>
      <p>How art throw?</p>

      <ul>
        {items.map((num)=>
          (<li key={num}>{num}</li>
          ))}

          <button onClick={add}>More!</button>
          <button onClick={remove}>Less!</button>
      </ul>
    </div>




    //jsx syntax: JSX is similar to HTML but can also include JavaScript expressions
   /* <div>
        <div class ="card">
            <h3> My Grocery List</h3>
            <ul id="list">
                <li>Soup</li>
                <li>Chicken</li>
                <li>Eggs</li>
            </ul>
            <button onClick="addItem()">Add</button>
            <button onClick="removeItem()">Remove</button>
        </div>

    </div>*/
  );

  

}



