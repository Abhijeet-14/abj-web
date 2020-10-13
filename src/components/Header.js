/** @jsx jsx */
import React, { useState, useEffect } from 'react'
import {
    Nav,
    Navbar,
} from 'react-bootstrap'
import { css, jsx, keyframes } from '@emotion/core'

// Lottie Animation:


import Home1 from '../shared/home3.png'

import Menu3 from '../shared/menu4.png'
import Cross3 from '../shared/cross3.png'


// import { MDBSmoothScroll } from "mdbreact";



// window.scrollTo({top: 0, left: 0, behavior: 'smooth' });

function Header(props) {
    const [menu, setMenu] = useState(false)
    const proj = 0;
    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <div id="home" className="pb-5 smooth-scroll">
            <Navbar css={styles.navbar} expand="lg" variant="dark" fixed="top"
                expanded={menu}
            >
                <Navbar.Brand href="#home" className="justify-content-flex-start mr-5"
                    css={styles.navbarBrand}
                    onClick={() => setMenu(false)}
                >
                    <span className="ml-2 ml-sm-3">
                        <img
                            src={Home1}
                            alt="Home1"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}
                >
                    {!menu && <img
                        src={Menu3}
                        alt="Menu"
                        css={{ height: 35, width: 35 }}
                    />
                    }
                    {menu && <img
                        src={Cross3}
                        alt="Menu"
                        css={{ height: 35, width: 35 }}
                    />}
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-flex-end"
                    css={styles.navbarCollapse}
                    onClick={toggleMenu}
                >
                    <Nav className="justify-content-flex-end"
                        fill
                        defaultActiveKey="education"
                        css={styles.nav}
                        onClick={toggleMenu}
                    >
                        <Nav.Item
                            css={styles.navItem}
                        >
                            <Nav.Link href="#about"
                                eventKey="about"
                                css={styles.navLink}
                                className="text-white"
                            >
                                ABOUT
                            </Nav.Link>
                        </Nav.Item>
                        {proj === 1 && <Nav.Item
                            css={styles.navItem}
                            >
                            <Nav.Link
                                href="#projects"
                                eventkey="projects"
                                css={styles.navLink}
                                className="text-white"
                            >
                                PROJECTS
                            </Nav.Link>
                        </Nav.Item>
                        }
                        <Nav.Item
                            css={styles.navItem}
                        >
                            <Nav.Link href="#languages"
                                eventKey="languages"
                                css={styles.navLink}
                                className="text-white"
                            >
                                LANGUAGES
                            </Nav.Link>
                        </Nav.Item>
                        {/* <Nav.Item
                            css={styles.navItem}
                        >
                            <Nav.Link href="#contact"
                                eventKey="contact"
                                css={styles.navLink}
                                className="text-white"
                            >
                                CONTACT
                            </Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}


export default Header



const fadeMenu = keyframes`
  from 0% {
      opacity: 0
  }

  50% {
      opacity: 0.8
  }

  100% {
    opacity: 1
  }
`

const styles = {
    container: css({
        height: "10%",
        width: "100%"
    }),
    navbar: css({
        backgroundColor: "#FD5F00",
        margin: 0,
        padding: 0,

    }),
    navbarBrand: css({
        marginLeft: 5,
        marginBottom: 5,
    }),
    navbarToggle: css`

    `,
    navbarCollapse: css({
        marginLeft: "20%",
        alignItems: "center",
        flexDirection: "row-reverse",
        // backgroundColor:"blue",
        width: "30%"
    }),
    nav: css({
        // marginRight: "1%",
        // backgroundColor:"green",
        alignItems: "center",
        width: "70%",
        marginRight: "0%",
    }),
    navItem: css({
        // marginLeft: "3%",
        // marginRight: "3%",
    }),
    navLink: css({
        alignItems: "center",
        fontSize: 20,
        color: "blue",
    }),
}









