import React, { Suspense } from "react";

// import Main from "./MainCompo";
// import './App.css';

import CircularProgress from "@material-ui/core/CircularProgress";
import { Tooltip } from "@material-ui/core";

const LazyMain = React.lazy(() => import("./MainCompo"));

const Visitors = ({ visitors }) => (
  <button
    style={{
      postion: "relative",
    }}
    // title="No. of Visitors"
  >
    <Tooltip title="Visitors Count">
      <b style={styles.visitors}>{visitors}</b>
    </Tooltip>
  </button>
);

function App() {
  const [visitors, setVisitors] = React.useState(0);

  React.useEffect(() => {
    {
      process.env.NODE_ENV === "production" &&
        (async () => {
          const res = await fetch(
            "https://sheet.best/api/sheets/4ca4b144-2312-45fc-bc3a-451e03decd3a/0",
            {
              crossOrigin: true,
            }
          );
          const data = await res.json();

          setVisitors(data[0]["No of visits"]);

          await handleMethod(data[0]["No of visits"]);
        })();
    }
  }, []);

  const handleMethod = async (visits) => {
    const res = await fetch(
      "https://sheet.best/api/sheets/4ca4b144-2312-45fc-bc3a-451e03decd3a/0",
      {
        method: "PATCH",
        crossOrigin: true,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "No of visits": Number(visits) + 1 }),
      }
    );
    const data = await res.json();
    // console.log(data);
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Suspense
        fallback={
          <div style={styles.loading}>
            <CircularProgress />
            <b>Welcome to My Portfollio</b>
          </div>
        }
      >
        <LazyMain />
        {visitors > 0 && <Visitors visitors={visitors} />}
      </Suspense>
    </div>
  );
}

export default App;

const styles = {
  loading: {
    display: "grid",
    placeItems: "center",
    marginTop: "46vh",
  },
  visitors: {
    borderRadius: "5rem",
    color: "white",
    backgroundColor: "#FD5F00",
    position: "fixed",
    boxShadow: "0 0 .2rem .2rem rgb(10, 10, 255, .2)",
    padding: "0.2rem .4rem",
    right: "3rem",
    bottom: "2rem",
  },
};
