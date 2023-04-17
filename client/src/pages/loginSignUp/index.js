import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'

const LoginSignupPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

const handleSubmit = async (event) => {
  event.preventDefault()

  const endpoint = isLogin ? `/api/users/login` : `/api/users/signup`;
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, password})
    });

    if (isLogin && response.ok) {
      navigate('/')
    } else if (!isLogin && response.ok) {
      setIsLogin()
      alert('Sign up successful, Please Log in :)')
    }

  } catch (error) {
    console.error(error)
    
    setName('');
    setPassword('');
  
  }
}


  
    return (
      <div className="container">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form  onSubmit={handleSubmit} >
          <div className="form-group">
            <label htmlFor="usernameInput">Username</label>
            <input
              type="text"
              className="form-control"
              id="usernameInput"
              name= "usernameInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
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