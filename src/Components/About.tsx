import "../Styles/About.css";
import image from '../assets/Image.png';



function About() {
  return (
    <div className="about-container">
      {/* <div style={{height:"150vh"}}></div> */}
          <h1>About Us</h1>
          <p>Welcome to our restaurant! We serve the best dishes with fresh ingredients, crafted with love.</p>
          <p>Our team is dedicated to providing an exceptional dining experience with a cozy ambiance.</p>
          <img src={image} alt="Restaurant" className="about-image" />
          
        </div>
      );
    };
    export default About