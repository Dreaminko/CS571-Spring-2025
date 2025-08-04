import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import { Col, Container, Pagination, Row } from "react-bootstrap";

export default function AllRecipes(props) {

    const [recipes, setRecipes] = useState([])
    const [page, setPage] = useState(1)
    const showRecipes = recipes.slice((page - 1) * 3, page * 3)

    useEffect(() => {
        fetch("https://cs571.org/rest/s25/ice/all-recipes", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            setRecipes(data);
        })
    }, []);

    return <div>
        <h1>Welcome to Badger Recipes!</h1>

        <Container>
            <Row>
                {
                    recipes.length > 0 ? showRecipes.map(r => <Col xs={12} md={4} key={r.name}><Recipe{...r} /></Col>) : <p>Loading...</p>
                }
            </Row>
        </Container>

        <Pagination>
            <Pagination.Item active={page === 1} onClick={() => setPage(1)}>1</Pagination.Item>
            <Pagination.Item active={page === 2} onClick={() => setPage(2)}>2</Pagination.Item>
        </Pagination>
    </div>
}