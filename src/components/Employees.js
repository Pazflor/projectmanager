import React, { useState } from "react";
import { Table } from "react-bootstrap";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thomas</td>
            <td>Nesset</td>
            <td>Frontend</td>
          </tr>
          <tr>
            <td>Jonas</td>
            <td>Say</td>
            <td>Backend</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
