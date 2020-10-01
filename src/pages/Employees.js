import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

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

  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [roleOption, setRoleOption] = useState("");

  const firstNameHandler = (e) => {
    setFirstNameInput(e.target.value);
  };

  const lastNameHandler = (e) => {
    setLastNameInput(e.target.value);
  };

  const roleHandler = (e) => {
    setRoleOption(e.target.value);
  };

  const resetForm = () => {
    setFirstNameInput("");
    setLastNameInput("");
    setRoleOption("");
  };

  const newEmployee = () => {
    const newEmp = {
      id: employees.length + 1,
      firstName: firstNameInput,
      lastName: lastNameInput,
      role: roleOption,
    };

    setEmployees((previousEmployeesState) => [
      ...previousEmployeesState,
      newEmp,
    ]);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    if (firstNameInput === "" || lastNameInput === "" || roleOption === "") {
      alert("Fill all fields");
    } else {
      setShow(false);
      newEmployee();
    }
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
            <td colSpan="5">
              <Button
                variant="link"
                block
                onClick={() => {
                  handleShow();
                  resetForm();
                }}
              >
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
              <Form.Control
                as="input"
                type="name"
                onChange={firstNameHandler}
              />
            </Form.Group>

            <Form.Group controlId="lastNameForm">
              <Form.Label>Last Name</Form.Label>
              <Form.Control as="input" type="name" onChange={lastNameHandler} />
            </Form.Group>

            <Form.Group controlId="roleForm">
              <Form.Label>Role</Form.Label>
              <Form.Control as="select" onChange={roleHandler}>
                <option>Choose a role</option>
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
              handleSubmit();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
