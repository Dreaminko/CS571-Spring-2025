import { useState } from "react";
import { Button, Card } from "react-bootstrap";

export default function Recipe(props) {
    const [likes, setLikes] = useState(0)

    function handleLike() {
        setLikes(likes + 1)
    }

    return <Card>
        <h2>{props.name}</h2>
        <p>by {props.author}</p>
        <p>{likes} likes</p>
        <Button onClick={handleLike}>Like this Recipe</Button>
    </Card>
}