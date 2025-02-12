import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "../styles/Portfolio.css"; // ✅ Ensure this CSS file exists

const Project = ({ title, image, github, collaborators, description }) => {
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={image} alt={title} className="project-image" />
      <Card.Body>
        <Card.Title className="project-title">{title}</Card.Title>
        <Card.Text className="project-description">{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <strong>Collaborators:</strong> {collaborators}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="custom" href={github} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Project;
