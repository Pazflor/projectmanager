import React, { useState } from "react";
import { Table, Button, Modal, Card } from "react-bootstrap";

export default function Test() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [statusOption, setStatusOption] = useState("");
  const statusHandler = (e) => {
    setStatusOption(e.target.value);
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
            <th>Name</th>
            <th>Client</th>
            <th>Status</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.client}</td>
              <td>
                <Button variant="warning" disabled>
                  {project.status}
                </Button>
              </td>
              <td>{project.view}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="5">
              <Button variant="link" block onClick={() => {}}>
                New Project
              </Button>
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
    </div>
  );
}
