import { useState } from "react"
import { Card, Button, Table } from "react-bootstrap"

export default function FeaturedItem(props) {
    const [showNutrition, setShowNutrition] = useState()

    function showFacts(props) {
       setShowNutrition(!showNutrition)
    }

    return <Card>
        <img src={props.img} alt={props.description}/>
        <h2>{props.name}</h2>
        <h3>${props.price} per unit</h3>
        <p>{props.description}</p>

        { showNutrition &&
        <div>
            <Table>
                <thead>
                    <th>Calories</th>
                    <th>Fat</th>
                    <th>Carbohydrates</th>
                    <th>Protein</th>
                </thead>
                <tbody>
                    <tr>
                        <td>{props.nutrition.calories}</td>
                        <td>{props.nutrition.fat}</td>
                        <td>{props.nutrition.carbohydrates}</td>
                        <td>{props.nutrition.protein}</td>
                    </tr>
                </tbody>
            </Table>
        </div> }

        <Button onClick={showFacts}>{showNutrition ? "Hide Nutrition Facts" : "Show Nutrition Facts"}</Button>
    </Card>
}