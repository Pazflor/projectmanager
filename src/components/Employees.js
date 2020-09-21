import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";

import EmployeeForm from './EmployeeForm'

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Table striped bordered hover>
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
          <tr>
            <td colSpan="3">
              <Button variant="link" block onClick={handleShow}>
                Add employee
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>New employee</Modal.Title>
          </Modal.Header>
          <Modal.Body><EmployeeForm /></Modal.Body>
          <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                  Close
              </Button>
              <Button variant='primary' onClick={handleClose}>
                  Add
              </Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
}
