import { Link } from "react-router-dom";
import "./translucentCard.scss";
import linkedIn from "../../assets/images/linked.png";

const TranslucentCard = () => (
  // <div className="nav-bar">
  //   <Link className="logo" to="/">
  //     <img src={linkedIn} alt="logo" />
  //   </Link>
  // </div>
  <div class="card">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="card-inner">
      <h1 class="greeting">Hi! my name is Nathan I am a Software Engineer!</h1>
    </div>
  </div>
);

export default TranslucentCard;
