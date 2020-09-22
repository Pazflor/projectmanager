import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

export default function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 2,
      firstName: "Thomas",
      lastName: "Nesset",
      role: "Frontend",
    },
    {
      id: 1,
      firstName: "Jonas",
      lastName: "Say",
      role: "Backend",
    },
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newEmployee = () => {
    const newEmp = {
      id: 3,
      firstName: 'Bjørn',
      lastName: "Olesen",
      role: "Graphic Designer",
    };

    setEmployees((previousEmployeesState) => [
      newEmp,
      ...previousEmployeesState,
    ]);
  };

  return (
    <div>
      <Table striped bordered hover key>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.role}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">
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
        <Modal.Body>
          <Form>
            <Form.Group controlId="firstNameForm">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>

            <Form.Group controlId="lastNameForm">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>

            <Form.Group controlId="roleForm">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select">
                <option>Frontend</option>
                <option>Backend</option>
                <option>Graphic Designer</option>
                <option>Marketing</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => {
              handleClose();
              newEmployee();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
