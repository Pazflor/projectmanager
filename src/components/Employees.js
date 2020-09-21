import React, { useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";

import EmployeeForm from "./EmployeeForm";

export default function Employees() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: "Thomas",
      lastName: "Nesset",
      role: "Frontend",
    },
    {
      id: 2,
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
          firstName: "Christian",
          lastName: "Olesen",
          role: "Graphic Designer"
      }

    setEmployees((previousEmployeesState) => [
      newEmp,
      ...previousEmployeesState,
    ]);
  };

  console.log(employees);

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
          <EmployeeForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleClose(); newEmployee();}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
