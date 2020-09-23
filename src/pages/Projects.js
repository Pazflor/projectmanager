import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

export default function Projects() {
  const [projectNameInput, setProjectNameInput] = useState("");
  const [clientNameInput, setClientNameInput] = useState("");

  const projectNameHandler = (e) => {
    setProjectNameInput(e.target.value);
  };

  const clientNameHandler = (e) => {
    setClientNameInput(e.target.value);
  };

  const resetForm = () => {
    setProjectNameInput("");
    setClientNameInput("");
  };

  const newProject = () => {
    const newPro = {
      id: projects.length + 1,
      name: projectNameInput,
      client: clientNameInput,
      status: 'In progress..'
    };

    setProjects((previousProjectsState) => [newPro, ...previousProjectsState]);
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    if (projectNameInput === "" || clientNameInput === "") {
      alert("Fill all fields");
    } else {
      setShow(false);
      newProject();
    }
  };

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Test Project",
      client: "Microsoft",
      status: "In progress..",
      team: [
        {
          id: 1,
          name: "Thomas Nesset",
          role: "Frontend",
        },
        {
          id: 2,
          name: "Jonas Say",
          role: "Backend",
        },
      ],
      view: (
        <Button variant="link" onClick={handleShow}>
          View Details
        </Button>
      ),
    },
  ]);

  return (
    <div>
      <Table striped bordered hover key>
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Name</th>
            <th>Client</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.client}</td>
              <td>{project.status}</td>
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
                New Project
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="projectNameForm">
              <Form.Label>Project name</Form.Label>
              <Form.Control
                as="input"
                type="name"
                onChange={projectNameHandler}
              />
            </Form.Group>
            <Form.Group controlId="lastNameForm">
              <Form.Label>Client</Form.Label>
              <Form.Control
                as="input"
                type="name"
                onChange={clientNameHandler}
              />
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
