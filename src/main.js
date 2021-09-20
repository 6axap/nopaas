import React from "react";
import Table from "./table";

function Main() {
  // const styles = { "grid-template-columns": "1fr 4fr" }
  const styles = { "grid-template-columns": "4fr" }
  return (
    <div className="container-fluid pb-3">
      <div className="d-grid gap-3" style={styles}>
{/*         <div className="bg-light border rounded-3">
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div> */}
        <div className="bg-light border rounded-3">
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Main;

