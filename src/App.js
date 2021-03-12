import React, {Component} from 'react';
import Table from './start';
import { Link } from 'react-router-dom';
import create from './create';
.
<NavLink activeClassName="active" to="/about">About</NavLink>

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Dogbook</h1>
        <br/>
        <h2>Users</h2>
        <Table />
        <Link to="/create.js">Add new dog</Link>
        <Route
          Path="/create.js"
          component={HomeComponent}
          exact
        />
      </div>
    )
  }
}

export default App;
