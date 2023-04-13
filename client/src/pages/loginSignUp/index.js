import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginSignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // we need to make an API call to Mongo to handle authentication
  
      if (isLogin) {
        console.log('Performing login with username:', username, 'and password:', password);
      } else {
        console.log('Performing signup with username:', username, 'and password:', password);
      }
  
      // Clear the form
      setUsername('');
      setPassword('');
    };
  
    return (
      <div className="container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form 
        action='/Login'
        method='POST'
        onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="usernameInput">Username</label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              name= "usernameInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              name="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-dark">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Create an account' : 'Login with existing account'}
          </button>
        </form>
      </div>
    );
  };
  
  export default LoginSignupPage;