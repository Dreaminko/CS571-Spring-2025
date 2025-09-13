import { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col, Pagination } from "react-bootstrap";
import Student from "./Student";

const Classroom = () => {
    const [students, setStudents] = useState([])
    const [matches, setMatches] = useState(0)
    
    const [searchName, setSearchName] = useState("")
    const [searchMajor, setSearchMajor] = useState("")
    const [searchInterest, setSearchInterest] = useState("")

    const [page, setPage] = useState(1)

    useEffect(() => {
        fetch("https://cs571.org/rest/s25/hw4/students", {
            headers: {
                "X-CS571-ID": CS571.getBadgerId()
            }
        })
        .then(res => res.json())
        .then(data => {
            setStudents(data)
            setMatches(data.length)
        })
    }, [])

    const searchStudents = () => {
        return students.filter(student => {
            
        })
    }

    return <div>
        <h1>Badger Book</h1>
        <p>Search for students below!</p>
        <hr />
        <Form>
            <Form.Label htmlFor="searchName">Name</Form.Label>
            <Form.Control id="searchName" value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
            <Form.Label htmlFor="searchMajor">Major</Form.Label>
            <Form.Control id="searchMajor" value={searchMajor} onChange={(e) => setSearchMajor(e.target.value)}/>
            <Form.Label htmlFor="searchInterest">Interest</Form.Label>
            <Form.Control id="searchInterest" value={searchInterest} onChange={(e) => setSearchInterest(e.target.value)}/>
            <br />
            <Button variant="neutral" onClick={() => {
                setSearchName("")
                setSearchMajor("")
                setSearchInterest("")
            }}>Reset Search</Button>
        </Form>

        <p>There are {matches} student(s) matching your search.</p>

        <Container fluid>
            <Row>
                {students.map((student) => 
                    <Col key={student.id} xs={1} sm={1} md={2} lg={3} xl={4}>
                        <Student {...student} />
                    </Col>
                )}
            </Row>
        </Container>
    </div>

}

export default Classroom;