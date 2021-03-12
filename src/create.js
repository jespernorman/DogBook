import React, {Component} from 'react';
import App from './App';
dfsf
class Create extends Component {
  userInfo () {
    var nameInput = document.getElementById("nameInput")
    var nickInput = document.getElementById("nickInput")
    var ageInput = document.getElementById("ageInput")
    var bioInput = document.getElementById("bioInput")
    
  }
  addFriend () {
    const ship = { "type": "space", age: 12 }
    ship.age = 11;
   
  }
  render() {
    return (
      <div className="create">
        <h1>Dogbook</h1>
        <div id="goback"><a href="App.js">Back to mainpage</a></div>
        <br/>
        <h3>Name: </h3> <input type="text" id="nameInput" name="search"> </input>
        <h3>Nick: </h3> <input type="text" id="nickInput" name="search"> </input>
        <h3>Age: </h3> <input type="text" id="ageInput" name="search"> </input>
        <h3>Bio </h3> <input type="text" id="bioInput" name="search"> </input>
        <h3>friends: </h3>
        <button type="button" onclick="addFriend;"> Add dog friend </button> 
        <br/>
        <button type="button" onclick="getData();"> save </button> 
      </div>
    )
  }
}

export default Create;