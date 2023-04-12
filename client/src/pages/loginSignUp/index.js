import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginSignupPage = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [isLogin, setIsLogin] = useState(true);

  // if (req.session.logged_in === true) {
  //   window.location.href = '/';
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // we need to make an API call to Mongo to handle authentication

  //   if (isLogin) {
  //     console.log('Performing login with username:', username, 'and password:', password);
  //     // Make API call for login
  //     const response = await fetch('/api/users/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ username, password })
  //     });

  //     if (response.ok) {
  //       // Redirect to '/'
  //       req.session.logged_in = true;
  //       window.location.href = '/';
  //     } else {
  //       // Handle login error
  //       console.error('Failed to login:', response.status);
  //     }
  //   } else {
  //     console.log('Performing signup with username:', username, 'and password:', password);
  //     // Make API call for signup
  //     const response = await fetch('/api/users/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ username, password })
  //     });

  //     if (response.ok) {
  //       // Redirect to '/'
  //       window.location.href = '/';
  //     } else {
  //       // Handle signup error
  //       console.error('Failed to signup:', response.status);
  //     }
  //   }

  //   // Clear the form
  //   setUsername('');
  //   setPassword('');
  // };
  
    return (
      <div className="container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usernameInput">Username</label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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