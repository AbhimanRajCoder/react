import React, { useEffect, useState} from 'react'
import './Home.css'
import bgvideo from './images/bgvideo.mp4'
import spaceboy from './images/spaceboy.png'
import { NavLink, useHref } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Home = () => {

const [asteroids,setAsteroids] = useState([]);

const [fullname, setName] = useState("");
const [mobile, setMob] = useState("");
const [msg, setMsg] = useState("");



useEffect(() => {
  fetch('./asteroid.json').then((res) => res.json())
  .then((data)=> setAsteroids(data.asteroids))
}, []);


const handleSubmit = async (event) => {
event.preventDefault();
try{
const formData = new FormData();
formData.append("fullname", fullname);
formData.append("mobile", mobile);
formData.append("msg", msg);

const response = await fetch("https://nstflashcards.abhicode.in/react.php", {
  method: "POST",
  body: formData,
});


const text = await response.text();
alert(text || "Form submitted successfully!");

} 

catch(error){
console.log(error);
}

}





  return (
    <>
      <Navbar />
      <div className="container">
      
        <div className="banner">
          <video className="banner-video" autoPlay loop muted>
            <source src={bgvideo} type="video/mp4" />
          </video>
          <div className="banner-content">
            <h1 className="banner-title">Welcome to ORBITOPS</h1>
          </div>
        </div>

        <div className="cardsdiv">
          <h1 className="heading">The Asteroids</h1>
          <div className="cardscontainer">

            {/* {asteroids.map((ast, index) => (
              <div className="card" key={index}>
                <img src={ast.image} className="cardimg" alt={ast.name} />
                <h2 className="cardheading">{ast.name}</h2>
                <h4>IRON: {ast.iron_content}</h4>
                <h4>GOLD: {ast.gold_content}</h4>
                <h4>COPPER: {ast.copper_content}</h4>
                <NavLink to="/" className="btn">
                  View Details
                </NavLink>
              </div>
            ))} */}


<div className="card">
  <img src="https://cdn.mos.cms.futurecdn.net/UPXTu4zhWN5k7HfKL4P9bP.jpg" className="cardimg" alt="Asteroid Name" />
  <h2 className="cardheading">16 Psyche</h2>
  <h4>IRON: 40%</h4>
  <h4>GOLD: 20%</h4>
  <h4>COPPER: 15%</h4>
  <h4>NICKEL: 25%</h4>
  <NavLink to="/" className="btn">View Details</NavLink>
</div>


<div className="card">
  <img src="https://media.sketchfab.com/models/4ddaa7d56a1a4c608694303a816804bc/thumbnails/790dc39c7ce6406caf5e72b97132a8dc/1024.jpeg" className="cardimg" alt="Asteroid Name" />
  <h2 className="cardheading">433 Eros</h2>
  <h4>IRON: 30%</h4>
  <h4>GOLD: 20%</h4>
  <h4>COPPER: 35%</h4>
  <h4>NICKEL: 25%</h4>
  <NavLink to="/" className="btn">View Details</NavLink>
</div>

<div className="card">
  <img src="https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/internal_resources/5264/Asteroid_Bennu-1.jpeg?w=800&h=600&fit=clip&crop=faces%2Cfocalpoint" className="cardimg" alt="Asteroid Name" />
  <h2 className="cardheading">Bennu</h2>
  <h4>IRON: 33%</h4>
  <h4>GOLD: 23%</h4>
  <h4>COPPER: 15%</h4>
  <h4>NICKEL: 25%</h4>
  <NavLink to="/" className="btn">View Details</NavLink>
</div>




          </div>
        </div>


{/* <div className="newsdiv">

</div> */}

<div className="contactusdiv">
   <h1 className="heading">Contact Us</h1>
<div className="contactform">
<form onSubmit={handleSubmit}>
<div className ="form-group">
<label >Full Name</label> <br/> 
<input type="text" value={fullname}   onChange={(e) => setName(e.target.value)}
 id="fullname" name="fullname" required  placeholder="Enter your full name" />
</div>

<div className="form-group">
<label >Mobile Number</label> <br/> 
<input type="number" onChange={(e) => setMob(e.target.value)}
 value={mobile} id="number" name="number" required  placeholder="Enter your Mobile Number" />
</div>

<div className="form-group">
<label >Message</label> <br/> 
<textarea type="text" onChange={(e) => setMsg(e.target.value)} value={msg} id="msg" name="msg" required  placeholder="Please Enter your Message" />
</div>

<input className="btn" type='submit' />

</form>
</div>
</div>


        <div className="infocontainer">
          <h1 className="heading">The Information</h1>
          <div className="infodiv">
            <div className="imagediv">
              <img src={spaceboy} alt="" className="spaceboyimg" />
            </div>
            <div className="info">
              <div className="contentdiv">
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "2rem",
                    textTransform: "uppercase",
                  }}
                >
                  The Asteroid
                </h1>
                <h5 style={{ fontSize: "1.8rem" }}>
                  Any of the many small planets that go around the sun. They are
                  also called minor Planets.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
