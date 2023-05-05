import React from "react";
import {
    Table
  } from "reactstrap";

function ProductTable({data,deleteRow,editRow}) {
    
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Count</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((item) => {
            return (
              <tr key={item.name}>
                <th scope="row">{item.name}</th>
                <td>{item.price}</td>
                <td>{item.count}</td>
                <td><button onClick={() =>deleteRow(item.name)}>delete</button></td>
                <td><button onClick={() => editRow(item)}>Edit</button></td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
}

export default ProductTable;
