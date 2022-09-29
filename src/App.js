import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [user, setUser] = useState([])

  useEffect (() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then ((response) => {
      setUser(response.data)
    })
  })

  return (
    <div className="App">
     <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
       {user?.map((e) => 
        <tr>
        <th scope="row">{e.id}</th>
        <td>{e.name}</td>
        <td>{e.username}</td>
        <td>{e.email}</td>
      </tr>
      )}
      </tbody>
    </table>
    <button>Back to Home</button>
    </div>
  );
}

export default App;
