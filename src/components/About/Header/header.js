import React, { useState, useEffect } from "react";
import "./header.scss";
import photoOfMe from "./unnamed.jpg";

const Header = () => {
  const [summaryText, setSummaryText] = useState("");
  useEffect(() => {
    fetch("/Summary.txt")
      .then((response) => response.text())
      .then((text) => {
        setSummaryText(text);
      });
  }, []);

  return (
    <div className="greetingContainer1">
      <div className="header">ABOUT</div>
      <div className="summaryContainer">
        <h1 className="personalSummary">
          <img className="myPhoto" src={photoOfMe} alt="photoOfMe"/>
          {summaryText}
        </h1>
      </div>
    </div>
  );
};

export default Header;
