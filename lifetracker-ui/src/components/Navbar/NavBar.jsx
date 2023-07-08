// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { FaBars, FaTimes } from 'react-icons/fa'
// import CodePathLogo from '../../assets/codepath.svg'
// import './Navbar.css'

// const Navbar = () => {
//     const [click, setClick] = useState(false)

//     const handleClick = () => setClick(!click)

//     return (
//         <div className='navbar'>
//             <div className='logo'>
//                 <Link to='/'>
//                     <img src={CodePathLogo} alt='logo' />
//                 </Link>
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                 <li className='nav-item'><Link to='/'>Activity</Link></li>
//                 <li className='nav-item'><Link to='/'>Exercise</Link></li>
//                 <li className='nav-item'><Link to='/'>Nutrition</Link></li>
//                 <li className='nav-item'><Link to='/'>Sleep</Link></li>
//                 <li className= 'sign-in'><Link to='/login'>Log In</Link></li>
//                 <li className= 'register'><Link to='/register'>Register</Link></li>
//             </ul>
//             <div className='hamburger' onClick={handleClick}>
//                 {click ? (<FaTimes size={30} style={{ color: '#6948ff' }} />) : (<FaBars size={30} style={{ color: '#6948ff' }} />)}
//             </div>
//         </div>
//     )
// }

// export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import NavLinks from './NavLinks';

// function Navbar({ isAuthenticated, handleLogout }) {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <Link to="/">
//             <img src={CodePathLogo} alt='logo' />
//         </Link>
//       </div>
//       <NavLinks isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from '../NavLinks/NavLinks.jsx';
import CodePathLogo from '../../assets/codepath.svg';
import './Navbar.css'

function Navbar({ isAuthenticated, handleLogout }) {
  const [click, setClick] = useState(false);
  
  const handleClick = () => setClick(!click);
  
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={CodePathLogo} alt='logo' />
        </Link>
      </div>
      <NavLinks 
        isAuthenticated={isAuthenticated} 
        handleLogout={handleLogout} 
        isMobile={click}
      />
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={30} style={{ color: '#6948ff' }} />) : (<FaBars size={30} style={{ color: '#6948ff' }} />)}
      </div>
    </nav>
  );
}

export default Navbar;





// - [ ] Build the **`Navbar`** component to:
//   - [x] Render JSX that is wrapped by a `nav` element with the class name of `navbar`
//   - [x] Render the app's logo as an element with the class name of `logo`.
//     - [x] Inside that element should be a `Link` component from `react-router-dom` that navigates the user to the `/` route when clicked.
//     - [x] Inside that `Link` component should be the application's logo (text or image).
//   - [ ] Render the `NavLinks.jsx` component with links to each of the resources and the `/activity` route.