import React, { useState, useEffect } from "react";
function App() {
  const arraOfusers = [
    { email: "siwar@gmail.com", password: "77777777777777" },
  ];
  const [user, setUser] = useState({});
  const [users, setUsers] = useState(arraOfusers);
  function handleChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value });
  
  }
  

  function onSubmit(event) {
    event.preventDefault();
    handleChange(event);
     alert("it  works"); 
    setUsers([...users, user]);
    setUser(" ")
    console.log(user);
  }
  

  useEffect(() => {
    console.log("hello i am in work");
  }, []);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label for="
          exampleInputEmail1">Email address</label>
          <input
            value={user.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
          value={user.password}
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default App;
