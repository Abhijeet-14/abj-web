import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import parse from "html-react-parser";

// import profile from "../shared/profile1.jpeg";
import db from "../db/db.json";

export default function About(props) {
  const profile =
    "https://media-exp1.licdn.com/dms/image/C5603AQGkc2M6vdHZiA/profile-displayphoto-shrink_400_400/0/1626383592470?e=1632355200&v=beta&t=_ZyteLp3ItmLOESwSo4u17BUjKjPS7IfSv53a-ZGn4M";
  const aboutMe = (
    <>
      <h3 style={{ color: "#05004E" }}>{db?.aboutMe?.title}</h3>
      <p style={styles.btext} className="mt-4">
        {db?.aboutMe?.contents?.map(({ content }) => parse(content))}
      </p>
    </>
  );

  return (
    <Container
      className="py-5 mt-0"
      id="about"
      fluid
      style={{ scrollBehavior: "smooth" }}
    >
      <h2 className="my-4 d-flex justify-content-center" style={styles.about}>
        {" "}
        ABOUT ME
      </h2>
      <hr />
      <Row
        style={styles.row}
        className={`py-3 mx-${props.proImg === 1 ? 3 : 0}`}
      >
        <Col style={styles} className={`mx-${props.proImg === 1 ? 5 : 0} col`}>
          {props.proImg === 1 ? (
            <div className="mx-3 text-left">{aboutMe}</div>
          ) : (
            <div className="mx-3 text-center">{aboutMe}</div>
          )}
        </Col>

        {props.proImg === 1 && (
          <>
            <Col className="w-25 col-3 my-auto text-center">
              <img
                src={profile}
                alt="Profile_Image"
                className="rounded-circle float-right block-example border border-warning"
                width="100%"
              />
            </Col>
          </>
        )}
      </Row>
      {props.proImg === 0 && (
        <>
          <Row style={styles.row} className={`pt-0 pb-5 mx-auto text-center`}>
            <Col className="text-center my-auto mx-auto" style={styles.proCol}>
              <div className="mx-auto text-center">
                <img
                  src={profile}
                  alt="Profile_Image"
                  border="primary"
                  className=" rounded-circle block-example border border-warning"
                  width="50%"
                />
              </div>
            </Col>
          </Row>
        </>
      )}
      <Row>
        <Col className="mx-sm-5 mx-0">
          <div
            className="mx-auto mx-sm-auto"
            style={{ height: ".1em", backgroundColor: "#05004E" }}
          ></div>
          <div className="mx-sm-4 mt-sm-4 my-4 text-center d-flex justify-content-between">
            {db?.aboutMe?.contacts?.map(({ name, detail }, index) => (
              <Card
                className="mx-sm-4 mt-3 mt-sm-0"
                style={styles.card}
                key={index.toString()}
              >
                <Card.Title style={styles.title}>{parse(name)}</Card.Title>
                <Card.Text style={styles.text}> {parse(detail)}</Card.Text>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

const styles = {
  about: {
    fontFamily: "Arial",
    fontWeight: "bold",
    color: "#05004E",
  },
  btext: {
    fontSize: "18px",
    fontStyle: "product sans",
    color: "#05004E",
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
};
