import React, { useState } from "react";
import { Table, Button, Modal, Card, Form } from "react-bootstrap";

export default function Test() {
  const [show, setShow] = useState(false);
  const [idProjectView, setIdProjectView] = useState("");

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const [projects, setProjects] = useState([
    {
      id: 2,
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
    },
    {
      id: 1,
      name: "kukukukuku",
      client: "balleballeballe",
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
    },
  ]);

  const [showNewProject, setShowNewProject] = useState(false);
  const handleShowNewProject = () => setShowNewProject(true);
  const handleCloseNewProject = () => setShowNewProject(false);

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
      status: "In progress..",
    };

    setProjects((previousProjectsState) => [newPro, ...previousProjectsState]);
  };

  const handleSubmitNewProject = () => {
    if (projectNameInput === "" || clientNameInput === "") {
      alert("Fill all fields");
    } else {
      setShow(false);
      newProject();
    }
  };

  const [workers, setWorkers] = useState([
    {
      id: 1,
      name: "Thomas",
      role: "Frontend",
    },
    {
      id: 2,
      name: "Jonas",
      role: "Backend",
    },
  ]);

  return (
    <div>
      <Table striped bordered hover key>
        <thead>
          <tr>
            <th>ID</th>
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
              <td>
                <Button variant="warning" disabled>
                  {project.status}
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3">
              <Button
                variant="link"
                block
                onClick={() => {
                  handleShowNewProject();
                  resetForm();
                }}
              >
                New Project
              </Button>
            </td>
            <td colSpan="2">
              <input
                placeholder="Enter ID"
                onChange={(event) => setIdProjectView(event.target.value)}
              ></input>
              <Button variant="link" onClick={handleShow}>
                View Details
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>{projects[0].name}</Modal.Title>
        </Modal.Header>
      </Modal>

      <Modal show={showNewProject} onHide={handleCloseNewProject}>
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
          <Button variant="secondary" onClick={handleCloseNewProject}>
            Close
          </Button>
          <Button
            type="submit"
            variant="primary"
            onClick={() => {
              handleSubmitNewProject();
              handleCloseNewProject();
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
