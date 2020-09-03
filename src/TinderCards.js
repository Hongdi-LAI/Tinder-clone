import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import database from './firebase';
import "./TinderCards.css";


function TinderCards() {
    const [people, setPeople] = useState([
      //  {
      //      name: 'steve jobs',
      //      url:'https://image.cnbcfm.com/api/v1/image/100496736-steve-jobs-march-2011-getty.jpg?v=1513863842&w=1400&h=950'
      //  },
      //  {
      //      name:'mark zuckerberg',
      //      url:'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401'
      //  }
    ]);
    
    //Piece of code which runs based on a condition
    useEffect(() => {
        // this is where the code runs
        // this will run once when the component loadsm and never again
        // .onSnapshot get all the info inside the collection and continue real-time listening to the data change
        // listener
        const unsubscribe = database
        .collection('people')
        .onSnapshot(snapshot => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );
        
        //clean up function, free up the space
        return () => {
            // detach the old listener
            unsubscribe();
        };
    }, []);

    // BAD
    // const people = [];
    // people.push ('sonny');
    // setPeople is the modifier of people

    // GOOD (Push to an array in REACT)
    // setPeople([...people,'sonny','qazi'])
    // ...people means keep whatever that is already there

    return (
        <div>
            
            
            <div className = "tinderCards__cardContainer">
                            {/* loop through */}
            {people.map(person => ( 
                <TinderCard
                    className = "swipe"
                    // allows REACT to efficiently re-render a LIST
                    // makes your APP super fast 
                    // will not refresh other irrelevant items
                    key = {person.name}
                    //prevent from swiping up and down
                    preventSwipe = {['up','down']}
                >
                    {/* care about the bracket `` for `url(${person.url})` */}
                    {/* changing the css with java script with the style line*/}
                    <div 
                    
                    style = {{ backgroundImage: `url(${person.url})`}}
                    className = "card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}


             </div>
        </div>
    );
};

export default TinderCards
