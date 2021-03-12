import React, {Component} from 'react';
fdsf
class Edit extends Component {
    userInfo () {
      var newnameInput = document.getElementById("nameInput")
      var newnickInput = document.getElementById("nickInput")
      var newageInput = document.getElementById("ageInput")
      var newbioInput = document.getElementById("bioInput")
    
    }
    render() {
      return (
        <div className="Edit">
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