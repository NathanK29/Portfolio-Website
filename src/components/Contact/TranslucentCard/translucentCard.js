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
        <div className="icon">
          <img src={gitHubLogo} alt="GitHub" />
          <span className="text">github.com/dsds</span>
        </div>
        <div className="icon">
          <img src={linkedInLogo} alt="LinkedIn" width="24" height="24" />
          <span className="text">linkedin.com/dsds</span>
        </div>
        <div className="icon">
          <img src={gmailLogo} alt="Gmail" width="24" height="24" />
          <span className="text">aznathan29@gmail.com</span>
        </div>
      </div>
    </div>
  </div>
);

export default TranslucentCard;
