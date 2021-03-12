import React, {Component} from 'react';
sdfsfd
class Profile extends Component {
    loadDogs() {
        "here all dogs will be loaded"
    }
    render() {
        return (
          <div className="profile">
            <h1>Dogbook</h1>
            <div id="goback"><a href="App.js">Back to mainpage</a></div>
            <br/>
            <img> </img>
            <h3>Name: </h3>  <a href="edit.js">Edit</a>
            <input type ="checkbox" name="present" value="present" id="present"></input>
            <h3>Nick: </h3> 
            <h3>Age: </h3> 
            <h3>Bio </h3> 
            <h3>friends: </h3>
            <br/>
            <button type="button" onclick="addFriend;"> Add dog friend </button> 
          </div>
        )
    }
}

  export default Profile;