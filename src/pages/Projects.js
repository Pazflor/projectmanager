import React, { useState } from 'react'
import { Table, Button, Modal } from "react-bootstrap";

export default function Projects() {

    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'test project',
            client: 'microsoft',
            team: ['Thomas Nesset', 'Jonas Say']
        }
    ])

      const [show, setShow] = useState(false);
      const handleShow = () => setShow(true);
      const handleClose = () => setShow(false);

    return (
        <div>
            <Table striped bordered hover key>
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Name</th>
            <th>Client</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.client}</td>
              <td>{employee.team}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="5">
              <Button
                variant="link"
                block
                onClick={() => {
                  handleShow();
                }}
              >
                New Project
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
        </div>
    )
}
