import { Link } from "react-router-dom";
import "./translucentCard.scss";
import gitHubLogo from "./images/github.png";
import linkedInLogo from "./images/linkedin.jpg";
import gmailLogo from "./images/gmail.svg";

const TranslucentCard = () => (
  <div className="container">
    <div className="card">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="card-inner">
        <h1 className="greeting">Contact</h1>
        <a href="https://github.com/NathanK29" target="_blank" rel="noopener noreferrer" className="icon-container">
          <img src={gitHubLogo} alt="GitHub" />
          <span className="text">https://github.com/NathanK29</span>
        </a>
        <a href="https://www.linkedin.com/in/nathan-kumar-1b6a7b28b/" target="_blank" rel="noopener noreferrer" className="icon-container">
          <img src={linkedInLogo} alt="LinkedIn" width="24" height="24" />
          <span className="text">https://www.linkedin.com/in/nathan-kumar-1b6a7b28b/</span>
        </a>
        <a href="mailto:aznathan29@gmail.com" target="_blank" rel="noopener noreferrer" className="icon-container">
          <img src={gmailLogo} alt="Gmail" width="24" height="24" />
          <span className="text">aznathan29@gmail.com</span>
        </a>
      </div>
    </div>
  </div>
);

export default TranslucentCard;
