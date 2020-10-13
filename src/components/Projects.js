import React from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'
import styled from '@emotion/styled'


export default function Projects() {
    return (
        <Container className="py-5" id="projects" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>PROJECTS</h2>
            <hr />
            <Row className="mt-5">
                <Col>
                    <CardGroup className="mx-auto" style={styles}>
                        <Card className="mt-sm-0 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                        <Card className=" mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row className="mt-sm-3 mt-0">
                <Col>
                    <CardGroup>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row className="mt-sm-3 mt-0">
                <Col>
                    <CardGroup>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
            <Row className="mt-sm-3 mt-0">
                <Col>
                    <CardGroup>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                        <Card className="mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

const styles = {
    software: {
        fontFamily: "Arial",
        fontSize: "32px",
        fontWeight: "bold",
        color: "#05004E"
    }
}
