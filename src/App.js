import React, { useState ,useEffect} from "react";
function App() {
  const [user, setUser] = useState({});
  function handleChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value });
  }
  
 function onSubmit(event){
   handleChange(event)
   alert('it  works');
 }
useEffect(()=>{
  console.log('hello i am in work');
},[])

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
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
      <div>
        <h1>hello</h1>
      </div>
    </div>
  );
}
export default App;
