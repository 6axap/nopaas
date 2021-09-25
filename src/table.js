import React, { useState, useEffect } from "react";
import axios from 'axios';
import './style/App.css';
import TableRow from "./tableRow";

function Table() {
  const [state, setState] = useState({ data: [] });

  // const callAPI = async () => {
  //   await fetch('http://localhost:3001/sites', {
  //     method: 'GET',
  //     body: 'json'
  //   })
  //     .then(res => JSON.parse(res))
  //     .then(res => {
  //       const obj = res;
  //       setState({
  //         data: [obj]
  //       });
  //       console.log(state.data)
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     });
  // }
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get('http://localhost:3001/sites');
      let data = response.data;
      setState(({
        data: data
      }));
    } catch (error) {
      console.error(error);
    }
  }

  async function tableRows() {
    state.data.forEach((row, index) => {
    return (
      <TableRow data={row} index={index + 1} />
    );
  })}

  return (
    <>
      <h1>Sites</h1>
      <table className="table table-striped table-hover table-bordered table-sm">
      <thead>
          <tr>
          <th scope="col">#</th>
          <th scope="col">Lot</th>
          <th scope="col">SID Site</th>
          <th scope="col">Status</th>
          <th scope="col">Site Type</th>
          <th scope="col">Address</th>
          <th scope="col">City</th>
          <th scope="col">Municipality</th>
          <th scope="col">HAK Type</th>
          <th scope="col">Offices</th>
          <th scope="col">Appartments</th>
          </tr>
      </thead>
      <tbody>
          {tableRows}
          {console.log(tableRows)}
      </tbody>
      </table> 
    </>
  );
}

export default Table;



