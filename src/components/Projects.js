import React from "react";
import {  makeStyles } from "@material-ui/core";
import parse from "html-react-parser";
import db from "../db/db.json";

import LanguageIcon from "@material-ui/icons/Language";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Projects() {
  const classes = useStyles();
  return (
    <>
      <div id="projects">
        <h2 className={classes.root}>PROJECTS</h2>
        <hr />
        <div className={classes.projects}>
          {db?.projects.map((val) => (
            <div className={classes.card}>
              <h2>
                <a
                  href={val?.appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {val.title}{" "}
                </a>
                <span className={classes.appLink}>
                  <a
                    href={val?.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <LanguageIcon />
                  </a>
                  <a
                    href={val?.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <GitHubIcon />
                  </a>
                </span>
              </h2>
              <i>
                <p>{val.subTitle}</p>
                <p>{parse(val.contents)}</p>
                <p>
                  <b>Tech Stack: </b> {val.techStack}
                </p>
              </i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "4  0",
    fontFamily: "Arial",
    fontSize: "32px",
    fontWeight: "bold",
    color: "#05004E",
  },
  projects: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row wrap",
  },
  card: {
    textOverflow: "wrap",
    width: "48rem",
    padding: "1rem",
    borderRadius: "1rem",
    margin: "2rem",
    [theme.breakpoints.up("sm")]: {
      width: "24rem",
      margin: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      margin: "3rem",
    },
    lineHeight: "1.5rem",
    backgroundColor: "#dfe1e48c",
    boxShadow: " 0 0 5px 5px rgb(0 0 0 / 0.1)",
  },
  appLink: {
    flex: 1,
    display: "flex",
    float: "right",
    alignItems: "center",
    margin: "0 1rem",
    gap: "1.2rem",
  },
}));
