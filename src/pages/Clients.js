import React from "react";
import { Table } from "react-bootstrap";

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: "Microsoft",
    },
    {
      id: 2,
      name: "Coop",
    },
  ];

  return (
    <div>
      <Table striped bordered hover key>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
