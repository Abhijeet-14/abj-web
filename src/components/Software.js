import React from 'react'
import { Container, Col, Row, CardGroup, Card } from 'react-bootstrap'
import styled from '@emotion/styled'


export default function Software() {
    return (
        <Container className="py-5 mt-0" id="languages" style={{ backgroundColor: "" }}>
            <h2 className="my-4 d-flex justify-content-center" style={styles.software}>LANGUAGES</h2>
            <hr />
            <Row className="mt-5">
                <Col>

                    <CardGroup className="mx-auto" style={styles.cardGroup}>
                        {/* <Card className="mt-sm-0 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5 align-middle" */}
                        <Card 
                            className="block-example border border-0 border-warning"
                            style={styles.card}
                        >
                            Java <br />
                            HTML5 | CSS<br />
                            JavaScript | React.Js<br />
                        </Card>
                        {/* <Card className=" mt-sm-5 mt-md-2 ml-3 mr-4 mr-sm-5 ml-sm-5">
                            qwertyuiop<br />
                            qwertyuiop<br />
                            qwertyuiop<br />
                        </Card> */}
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
    },
    card: {
        fontFamily: 'Product Sans , Arial',
        fontSize: "30px",
        fontWeight: "italic",
        color: "#05004E",
        backgroundColor: "#F9F8EB",
        textAlign: 'center',
    },
    cardGroup: {
        color: "#05004E"
    },
    lag: {
        fontFamily: 'Product Sans , Arial',
        fontSize: "30px",
        // fontWeight: "bold",
        fontStyle: "italic",
        color: "#05004E",
        backgroundColor: "#F9F8EB",
        textAlign: 'center',
    }
}
