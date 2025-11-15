function addItem(){
  const item = prompt("New Item"); //ask user for new item name
  if (item){ //If user entered something
    const li = document.createElement("li"); //create a new list item
    li.textContent = item;//set its text to what user typed
    document.getElementById("list").appendChild(li);
  }  
}

function removeItem(){
    const list = document.getElementById("list");
    const last = list.lastElementChild;
    if(last) list.removeChild(last);
}