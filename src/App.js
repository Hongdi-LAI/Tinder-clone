import React from 'react';
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";


function App() {
  return (
    <div className="App">
     
     {/* Header */}
     {/* referencing the Header.js */}
     {/* putting the Header outside of Router so it appears on every page */}
     <Router>
      <Switch>
      <Route path="/chat/:person"> {/* dynamic url/ wild card */}
          {/* when coming into the chat page, passing in a backButton props to chats screen */}
          <Header backButton = "/chat" />
          <ChatScreen />
        </Route>
       <Route path="/chat"> {/* http://localhost:3000/chats */}
          {/* when coming into the chats page, passing in a backButton props */}
          <Header backButton = "/" />
          <Chats />
        </Route>
        {/* always have your default root at the bottom because the code read starts from top down and will stop at default root, if the default is in the front, the rest won't be read */}
        <Route path="/"> {/* http://localhost:3000/ */}
          <Header />
          <TinderCards />
          <SwipeButtons />
        </Route>
      </Switch>
     </Router>
     
      

      


     {/* Tinder Cards */}
     {/* Buttons below Tinder Cards */}

     {/* Chats Screen */}
     {/* Individual Chat Screen */}
    </div>
  );
}

export default App;
