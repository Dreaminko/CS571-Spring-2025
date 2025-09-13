import { useState } from "react";
import { Card } from "react-bootstrap";

const Student = (props) => {
    
    return <div>
                <h2>{props.name.first} {props.name.last}</h2>
                <h4>{props.major}</h4>
                {props.name.first} is taking {props.numCredits} credits and is {props.fromWisconsin ? "" : "NOT"} from Wisconsin.
                <br/>
                They have {props.interests.length} interests including...
                <ul>
                    {
                        props.interests.map((interest, index) => (
                            <li key={index}>{interest}</li>
                        ))
                    }
                </ul>
    </div>
}

export default Student;