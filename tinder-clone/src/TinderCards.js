import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";


function TinderCards() {
    const [people, setPeople] = useState([
        {
            name:"Elon Musk",
            url:
            "https://cdn.vox-cdn.com/thumbor/FGxE-lBozP6CLLZgDKdtOGActxk=/0x0:2040x1360/1220x813/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67108186/elon_musk_tesla_3036.0.jpg"
        },
        {
            name:"Jeff Bezos",
            url:
            "https://content.fortune.com/wp-content/uploads/2020/02/GettyImages-1078542150.jpg?resize=1500,1000"
        },
        {
            name:"Binura owin",
            url:
            "https://avatars2.githubusercontent.com/u/53115861?s=460&u=2c9cf0e6974a97f7ca50ea9fb406f9a65f6c13c5&v=4"
        },
    ]);

    const swiped = (direction, nameToDelete) =>{
        console.log("removing" + nameToDelete);
        // setLastDirection(direction);
    };
    const outOfFrame = (name) =>{
        console.log(name + "left the screen");
    }


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard className="swipe"
                key={person.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen ={() => outOfFrame(person.name)}
                >
                    <div style={{backgroundImage:`url('${person.url}')`}}
                    className="card"
                    >
                    <h3>{person.name}</h3>
                    </div>

                </TinderCard>
                
            ))}
            </div>      
        </div>
    );
}

export default TinderCards
