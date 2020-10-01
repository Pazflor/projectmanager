import React, { useState } from "react";
import { Table, Button, Modal, Card, Form } from "react-bootstrap";

export default function Test() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [idProjectView, setIdProjectView] = useState(0);

  const viewDetails = (e) => {
    if (e.target.value > projects.length || e.target.value < 1) {
      alert("invalid project ID!");
      e.target.value = "";
    } else {
    setIdProjectView(e.target.value - 1);
    handleShow();
    e.target.value = "";
    }
  }

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Test Project",
      client: "Microsoft",
      status: "In progress..",
      desc: "This is a test app for windows. Blagsdnada",
      team: [
        {
          id: 1,
          name: "Christian Olsen",
          role: "Frontend",
        },
        {
          id: 2,
          name: "Edvard Ingvaldsen",
          role: "Backend",
        },
      ],
    },
    {
      id: 2,
      name: "Project iOS-app",
      client: "Shortcut",
      status: "Finished",
      desc: "This is an app for shortcut.",
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
      desc: "",
      team: []
    };

    setProjects((previousProjectsState) => [...previousProjectsState, newPro]);
  };

  const handleSubmitNewProject = () => {
    if (projectNameInput === "" || clientNameInput === "") {
      alert("Fill all fields");
    } else {
      setShow(false);
      newProject();
    }
  };

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
                placeholder="Enter ID to view details"
                onChange={viewDetails}
              ></input>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{projects[idProjectView].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ border: "none" }}>
            <Card.Title>Client: {projects[idProjectView].client}</Card.Title>
            <Card.Text>{projects[idProjectView].desc}</Card.Text>
            <Button variant="warning" disabled>
              {projects[idProjectView].status}
            </Button>
          </Card>
          <br></br>
          <Card style={{ border: "none" }}>
            <Card.Title>Working on this project</Card.Title>
            <Card.Text>
              <Table striped bordered hover key>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {projects[idProjectView].team.map((worker) => (
                    <tr key={worker.id}>
                      <td>{worker.name}</td>
                      <td>{worker.role}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Text>
          </Card>
        </Modal.Body>
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
