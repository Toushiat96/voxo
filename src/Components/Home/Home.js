import React from "react";
import {Link} from "react-router-dom";
import GetAppIcon from '@material-ui/icons/GetApp';
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="left-text col-lg-8 col-md-8 col-sm-12 col-xs-12 mx-auto mt-5">
            <p>
              {" "}
              5 Questions to ask<br></br> when looking at a <br></br> new{" "}
              <strong>Phone Provider</strong>
            </p>
            <a href="#"  className="download-btn">
            <GetAppIcon ></GetAppIcon>
            Download the free ebook
            </a>
            <div className="form-area">
            <h2> Thank you for Visiting Us</h2>
            <p>Please insert your info below to download our eBook</p>
            <form action="" method="">
              input
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
