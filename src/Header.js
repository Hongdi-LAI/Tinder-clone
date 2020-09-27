import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import IconButton from "@material-ui/core/IconButton"; /* ripple effect around the button */
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { Link, useHistory } from "react-router-dom";
// ES6 ARROW Function
// const Header = () => {}
// always use CONST until you need to use LET

function Header({ backButton }) {
  /* useHistory() fetches us the session history */
  const history = useHistory();
  return (
    //BEM
    <div className="header">
      {/*if you pass in a backbutton props, then get arrowbackicon, otherwise get Personal Icon*/}
      {backButton ? (
        <div className="header__iconLeft">
          <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon fontSize="large" />
          </IconButton>
        </div>
      ) : (
        <div className="header__iconLeft">
          <IconButton>
            <PersonIcon fontSize="large" />
          </IconButton>
        </div>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
        />
      </Link>

      <Link to="/chat">
        <div className="header__iconRight">
          <IconButton>
            <ChatBubbleIcon fontSize="large" />
          </IconButton>
        </div>
      </Link>
    </div>
  );
}

export default Header;
