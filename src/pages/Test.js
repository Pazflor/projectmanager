import React, { useState } from "react";
import { Table, Button, Modal, Card, Form } from "react-bootstrap";

export default function Test() {
  const [show, setShow] = useState(false);
  const handleShow = (id) => {
    setShow(true);
    return (<Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{projects[id].name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card style={{ border: "none" }}>
          <Card.Title>Client: {projects[id].client}</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            malesuada porta mollis. In sed odio id lectus mattis venenatis.
            Sed suscipit vehicula sem consequat rutrum. Nulla euismod
            dignissim neque ornare ultricies. Integer maximus tellus nec
            placerat vehicula. Sed ultrices ipsum enim. Praesent volutpat
            condimentum quam, sed imperdiet dolor mattis in.
          </Card.Text>
          <Button variant="warning" disabled>
            {projects[id].status}
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
              {workers.map((worker) => (
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
      <Modal.Footer></Modal.Footer>
    </Modal>)
  }
  const handleClose = () => setShow(false);

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
      ]
    },
    {
      id: 2,
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
      ]
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
            <td colSpan="5">
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
              <Button
                  variant="link"
                  block
                  onClick={handleShow(e.target.value)}
              >
                View project with ID:
                <input></input></Button>
            </td>
          </tr>
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{projects[0].name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ border: "none" }}>
            <Card.Title>Client: {projects[0].client}</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              malesuada porta mollis. In sed odio id lectus mattis venenatis.
              Sed suscipit vehicula sem consequat rutrum. Nulla euismod
              dignissim neque ornare ultricies. Integer maximus tellus nec
              placerat vehicula. Sed ultrices ipsum enim. Praesent volutpat
              condimentum quam, sed imperdiet dolor mattis in.
            </Card.Text>
            <Button variant="warning" disabled>
              {projects[0].status}
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
                  {workers.map((worker) => (
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
        <Modal.Footer></Modal.Footer>
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
