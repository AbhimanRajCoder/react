import './App.css'
import logo from './assets/logohead.png'


function Abhiman() {
  return(
<div className="header">
<nav>
  <img src={logo} className="logoimg" alt="logo" />
  <div className='menu'>
<a className="link" href="https://reactjs.org">Home</a>
<a className="link" href="https://reactjs.org">Project</a>
<a className="link" href="https://reactjs.org" >Features</a>
<a className="link" href="https://reactjs.org" >Login</a>
  </div>
</nav>
</div>
  );
}

export default Abhiman
