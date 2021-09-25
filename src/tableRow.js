import React from "react";

function TableRow(props) {
  const data = props;
  const los = data.ftthProjektInfo.losBezeichnung;
  const sidSite = data.siteInfo.sidSite;
  const status = data.akquisitionState.state;
  const siteType = data.ftthProjektInfo.erschliessungsArt;
  const address = data.address.streetName + " " + data.address.houseNumber;
  const city = data.address.city;
  const municipality = data.municipality.name;
  const hakType = data.ftthProjektInfo.hakTyp;
  const officesCount = data.nuEh.bus;
  const appartmentsCount = data.nuEh.priv;
  console.log(props)
  
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{los}</td>
      <td>{sidSite}</td>
      <td>{status}</td>
      <td>{siteType}</td>
      <td>{address}</td>
      <td>{city}</td>
      <td>{municipality}</td>
      <td>{hakType}</td>
      <td>{officesCount}</td>
      <td>{appartmentsCount}</td>
    </tr>
  );
};

export default TableRow;