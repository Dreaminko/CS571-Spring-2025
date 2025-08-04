import { useEffect, useState } from "react";
import { Button, Container, Form, Row, Pagination } from "react-bootstrap";
import Student from "./Student";

const Classroom = () => {
    const [students, setStudents] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch("https://cs571.org/rest/s25/hw4/students", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => setStudents(data))
    }, [])

    return <div>
        <h1>Badger Book</h1>
        <p>Search for students below!</p>
        <hr />
        <Form>
            <Form.Label htmlFor="searchName">Name</Form.Label>
            <Form.Control id="searchName"/>
            <Form.Label htmlFor="searchMajor">Major</Form.Label>
            <Form.Control id="searchMajor"/>
            <Form.Label htmlFor="searchInterest">Interest</Form.Label>
            <Form.Control id="searchInterest"/>
            <br />
            <Button variant="neutral">Reset Search</Button>
        </Form>
        <Container fluid>
            <Row>
                {students.map((student) => (
                    <Student key={student.id} {...student} />
                ))}
            </Row>
        </Container>

        <Pagination>

        </Pagination>

    </div>

}

export default Classroom;