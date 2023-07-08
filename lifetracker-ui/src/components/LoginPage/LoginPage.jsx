

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm'; 

function LoginPage({ appState, setAppState }) { 
  const navigate = useNavigate();

  useEffect(() => {
    if (appState.isAuthenticated) {
      navigate('/activity');
    }
  }, [appState.isAuthenticated, navigate]);

  const handleLogin = (userData) => {
    setAppState((prevState) => ({
      ...prevState,
      user: userData,
      isAuthenticated: true,
    }));
  };

  return (
    <div className="login-page">
      <LoginForm handleLogin={handleLogin}/>
    </div>
  );
}

export default LoginPage;






// - [ X] Build the **`LoginPage`** component to:
//   - [ X] Render JSX that is wrapped by an element with the class name of `login-page`
//   - [ ] Using either a custom hook, context, or manually set state, check to see if a user is already logged in
//     - [ ] If the user is already logged in, redirect them to the `/activity` page.
//     - [ ] If no user is authenticated, render the `LoginForm` component and pass it any props it needs.