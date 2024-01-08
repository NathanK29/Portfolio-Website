import { Link } from "react-router-dom";
import "./translucentCard.scss";

const TranslucentCard = () => (
  <div class="container">
    <div class="card">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="card-inner">
        <h1 class="greeting">Contact</h1>
        <h1 class="github">GitHub</h1>
        <h1 class="linkedin">LinkedIn</h1>
        <h1 class="email">Email</h1>
      </div>
    </div>
  </div>
);

export default TranslucentCard;
