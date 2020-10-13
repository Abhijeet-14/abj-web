import React from 'react'
import { Container, Col, Row, CardGroup, Card, Image } from 'react-bootstrap'

import profile from '../shared/profile1.jpeg'

export default function About(props) {
    const aboutMe = (
        <>
            <h3 style={{ color: "#05004E" }}>Food Process Engg.</h3>
            <p style={styles.btext} className="mt-4">
                I am an undergraduate student, pursuing B.TECH Food Process Engineering,
                at <a href="https://nitrkl.ac.in" style={{ color: "#05004E" }}>
                    <strong>
                        National Institute of Technology, Rourkela.
                    </strong>
                </a>
                <br />

                Being fascinated by software and websites, I started practicing web development in my 2nd year of college and mobile application development in my spring semester of 3rd year of college.
            </p>
        </>
    )
    return (
        <Container
            className="py-5 mt-0"
            style={{ backgroundColor: "" }}
            id="about"
            fluid
        >
            <h2 className="my-4 d-flex justify-content-center" style={styles.about}> ABOUT ME</h2>
            <hr />
            <Row style={styles.row} className={`py-3 mx-${props.proImg === 1 ? 3 : 0}`}>
                <Col style={styles} className={`mx-${props.proImg === 1 ? 5 : 0} col`}>
                    {
                        props.proImg === 1
                            ? <div className="mx-3 text-left">{aboutMe}</div>
                            : <div className="mx-3 text-center">{aboutMe}</div>
                    }
                </Col>

                {props.proImg === 1 &&
                    <>
                        {/* <Col className=" mx-0 my-0"
                            // style={{backgroundColor:"pink"}}
                            ></Col> */}
                        <Col className="w-25 col-3 my-auto text-center"
                            // style={{backgroundColor:"green"}} 
                        >
                            <img src={profile} alt="Profile Image"
                                className= "rounded-circle float-right block-example border border-warning"
                                 />
                        </Col>
                    </>
                }


            </Row>
            {props.proImg === 0 &&
                <>
                    <Row style={styles.row} className={`pt-0 pb-5 mx-auto text-center`} 
                        // ${props.proImg === 1 ? 3 : 0}
                    >
                        <Col className="text-center my-auto mx-auto"
                            // {/* <Col xs={12} xsOffset={6} */}
                            style={styles.proCol}
                        >
                            <div className="mx-auto text-center"
                                // style={{backgroundColor:"red"}}
                                >
                                <img src={profile} alt="Profile Image" border="primary"
                                    className=" rounded-circle block-example border border-warning"
                                    
                                    // style={{backgroundColor: "yellow"}}
                                    />
                            </div>
                        </Col>
                        {/* <Col className="col-1"></Col> */}
                    </Row>
                </>
            }
            <Row>
                <Col className="mx-sm-5 mx-0">
                    <div className="mx-auto mx-sm-auto" style={{ height: ".1em", backgroundColor: "#05004E" }} >
                    </div>
                    <CardGroup className="mx-sm-4 mt-sm-4 my-4 text-center text-sm-left">

                        <Card className="mx-sm-4 mt-3 mt-sm-0" style={styles.card}>
                            <Card.Title style={styles.title}>Phone</Card.Title>
                            <Card.Text style={styles.text}> +91-7209428890</Card.Text>
                        </Card>

                        <Card className="mx-sm-4 text-sm-center " style={styles.card}>
                            <Card.Title style={styles.title}>Email</Card.Title>
                            <Card.Text style={styles.text}  >abhijeet.rts@gmail.com</Card.Text>
                        </Card>

                        <Card className="mx-sm-4 text-sm-right" style={styles.card}>
                            <Card.Title style={styles.title}>University Email</Card.Title>
                            <Card.Text style={styles.text}> 117fp0719@nitrkl.ac.in</Card.Text>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container >
    )
}

const styles = {
    about: {
        fontFamily: "Arial",
        fontWeight: "bold",
        color: "#05004E"
    },
    btext: {
        fontSize: "18px",
        fontStyle: "product sans",
        color: "#05004E",
    },
    row: {
    },
    card: {
        backgroundColor: "#F9F8EB",
        border: 0,
        color: "#05004E",
    },
    title: {
        fontWeight: "bold",
        fontFamily: "Arial",
    },
    text: {
        fontSize: "1.1em",
        fontStyle: "italic",
    },
    proCol: {
        // alignItems:"center",
        // justifyContent:"center",
        // backgroundColor: "green",
    }
}