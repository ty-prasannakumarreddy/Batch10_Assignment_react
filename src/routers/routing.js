 import {Link,Route} from "react-router-dom";

 import Home from "../components/Home.js";
 import Technologies from"../components/Technologies.js";
 import ContactUs from "../components/ContactUs.js";
 
export const routing = (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">TechnoElevate</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technologies">Technologies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactus">ContactUs</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/technologies" component={Technologies} />
    <Route path="/contactus" component={ContactUs} />
    </>
);


    