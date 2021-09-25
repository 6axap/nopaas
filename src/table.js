import React from "react";
import axios from 'axios';
import './style/App.css';
import TableRow from "./tableRow";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

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
  
  async componentDidMount() {
    await this.getData()
  }

  async getData() {
    try {
      const response = await axios.get('http://localhost:3001/sites');
      let data = response.data;
      this.setState({
        data: data
      });
    } catch (error) {
      console.error(error);
    }
  }

  renderRow() {
    return ();
  }


  render() {
    const data = this.state.data;
    const tableRows = data.forEach((row, index) => {
      console.log(row)
      return (
        <TableRow data={row} index={index + 1} />
      );
    })

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
  };
}

export default Table;



