import React, { Suspense } from "react";

// import Main from "./MainCompo";
// import './App.css';

import CircularProgress from "@material-ui/core/CircularProgress";

const LazyMain = React.lazy(() => import("./MainCompo"));

const Visitors = () => (
  <button
    style={{
      postion: "relative",
    }}
    title="No. of Visitors"
  >
    <b style={styles.visitors}>4</b>
  </button>
);

function App() {
  const [visitors, setVisitors] = React.useState(0);

  React.useEffect(() => {
    (async () => {
      const res = await fetch(
        "https://spreadsheets.google.com/feeds/worksheets/1JQ0v-Mo3HRWKbnwV4tOxCCDOEwWjLW7nDyhmbKACBoE/public/basic?alt=json",
        {
          crossOrigin: true,
        }
      );
      const data = await res.json();
      console.log(data?.feed?.entry[1]?.content?.$t);
      setVisitors(data?.feed?.entry[1]?.content?.$t);
    })();
  }, []);
  console.log(process.env);
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
        {visitors > 0 && <Visitors />}
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
    textAlign: "center",
    borderRadius: "3rem",
    backgroundColor: "red",
    position: "fixed",
    width: "1.8rem",
    height: "1.8rem",
    right: "3rem",
    bottom: "2rem",
  },
};
