import React, { useState, useEffect } from 'react'
import { Card, Container, Button, Row, Col, CardGroup } from 'react-bootstrap'
import styled from '@emotion/styled'

import About from './About'
import Software from './Software'
import Projects from './Projects'

import In from '../shared/insta3.png'
import Gh from '../shared/gh4.png'
import Yt from '../shared/yt2.png'

import windowSize from 'react-window-size'

function Center(props) {

    const [open, setOpen] = useState({
        proImg: 0,
        projects: 0,
        websites: 0,
        backendApp: 0,
        software: 0,
    });

    useEffect(
        () => props.windowWidth < 588 ? setOpen({ ...open, proImg: 0 }) : setOpen({ ...open, proImg: 1 })
        , [props.windowWidth]
    )

    return (
        <Container fluid
            style={styles.container}
            className="smooth-scroll"
            id="home"
        >
            <Row className="pt-2 pb-0 py-sm-0" style={styles.row} id="" >
                <Col className="py-auto py-lg-5 d-flex justify-content-center" style={styles.col}>
                    <Card className="mx-auto my-5 border-0" style={styles.card}>
                        <Card.Title className="mx-auto mb-0" style={styles.title}>
                            HI <span style={{ color: "#FD5F00", fontFamily: "product sans", fontWeight: "bolder" }}>,</span> I AM<br />
                                ABHIJEET<br />
                                KUMAR<span style={{ color: "#FD5F00", fontFamily: "Product Sans", fontWeight: "bolder" }}>.</span>

                        </Card.Title>
                        <Card.Text className="my-3" style={styles.text}>
                            <div>
                                F.P ENGINEERING STUDENT {'&'}<br />
                                {/* FULL-STACK DEVELOPER (Web {'&'} Apps) */}
                            </div>
                            <Card.Link target="_blank" href="https://drive.google.com/file/d/1_pjUr5w-fDmAD_LpEFV6XuvJeydFFKxt/view?usp=sharing">
                                <button className="mt-3 btn" type="button"
                                    style={{ backgroundColor: "#FD5F00", color: "#fff", height: "3em", width: "10.5em" }}
                                >
                                    Download Rèsumè
                                </button>
                            </Card.Link>
                        </Card.Text>
                        <div styles={styles.link} className="mx-auto mt-1">
                            <Card.Link href="https://www.linkedin.com/in/abhijeet-kumar-208478163/"
                                target="_blank"
                                style={styles.link} >
                                <img src={In} alt="IN" />
                            </Card.Link>
                            <Card.Link href="https://github.com/Abhijeet-14"
                                target="_blank"
                                style={styles.link} >
                                <img src={Gh} alt="GH" style={{ height: "2em", width: "2em" }} />
                            </Card.Link>
                            <Card.Link href="https://www.youtube.com/channel/UCyhChkyobpFvtqQATIMM9xQ?view_as=subscriber"
                                target="_blank"
                                style={styles.link} >
                                <img src={Yt} alt="YT" />
                            </Card.Link>
                        </div>
                    </Card>
                </Col>
            </Row>
            <About proImg={open.proImg} />
            {open.projects === 1 && <Projects />}
            {/* <Projects /> */}
            {open.software === 0 && <Software />}
        </Container >
    )
}


const styles = {
    container: {
        backgronudColor: "#F9F8EB",
    },
    row: {
    },
    col: {

    },
    card: {
        backgroundColor: "#F9F8EB",
    },
    body: {
    },
    title: {
        // backgroundColor: "yellow",
        fontFamily: 'Product Sans , Arial',
        fontSize: "55px",
        fontWeight: "bold",
        textAlign: 'center',
        color: "#05004E",
    },
    subtitle: {
    },
    text: {
        fontFamily: 'Product Sans , Arial',
        fontSize: "22px",
        fontWeight: "bold",
        textAlign: 'center',
        color: "#05004E",
        // backgroundColor: "pink"
    },
    link: {
        fontFamily: 'Product Sans , Arial',
        fontSize: "30px",
        fontWeight: "bold",
        color: "#05004E",
        textAlign: 'center',
    }
}


export default windowSize(Center);