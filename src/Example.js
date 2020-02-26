import React, { useState } from "react";
import {
  BrydonUI,
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardImage,
  CardBody,
  CardTitle,
  CardFooter,
  Container,
  Row,
  Col,
  Grid,
  GridItem
} from "./components";

const App = () => {
  const [comp, setComp] = useState("alert");

  return (
    <BrydonUI>
      <Container>
        <Button onClick={() => setComp("alert")}>Alerts</Button>
        <Button onClick={() => setComp("badge")}>Badges</Button>
        <Button onClick={() => setComp("button")}>Buttons</Button>
        <Button onClick={() => setComp("buttongroup")}>Button Groups</Button>
        <Button onClick={() => setComp("card")}>Cards</Button>
        <Button onClick={() => setComp("container")}>Containers</Button>
        <Button onClick={() => setComp("grid")}>Grids</Button>
      </Container>
      <Container>
        {comp === "alert" ? (
          <>
            <Alert align="left" className="custom class names">
              Primary, left
            </Alert>
            <Alert theme="danger" align="right">
              Danger, right
            </Alert>
            <Alert theme="success" align="center">
              Success, center
            </Alert>
          </>
        ) : comp === "badge" ? (
          <>
            <Badge theme="primary" className="custom" onClick={window.alert}>
              Alerty badge
            </Badge>
            <Badge theme="success">This is a badge</Badge>
            <Badge theme="warning">This is a badge</Badge>
            <Badge theme="danger">This is a badge</Badge>
            <Badge theme="light">This is a badge</Badge>
            <Badge theme="dark">This is a badge</Badge>
          </>
        ) : comp === "button" ? (
          <>
            <Button theme="primary">Click me!</Button>
            <Button theme="success">Click me!</Button>
            <Button theme="warning">Click me!</Button>
            <Button theme="danger">Click me!</Button>
            <Button theme="light">Click me!</Button>
            <Button theme="dark">Click me!</Button>
            <Button theme="primary" size="md">
              Click me!
            </Button>
            <Button theme="primary" size="sm">
              Click me!
            </Button>
          </>
        ) : comp === "buttongroup" ? (
          <>
            <ButtonGroup>
              <Button theme="primary">Action</Button>
              <Button theme="warning">Warning</Button>
              <Button theme="danger">Danger</Button>
            </ButtonGroup>
            <ButtonGroup vertical>
              <Button theme="primary">Action</Button>
              <Button theme="warning">Warning</Button>
              <Button theme="danger">Danger</Button>
            </ButtonGroup>
            <ButtonGroup vertical size="md">
              <Button theme="primary">Action</Button>
              <Button theme="warning">Warning</Button>
              <Button theme="danger">Danger</Button>
            </ButtonGroup>
            <ButtonGroup vertical size="sm">
              <Button theme="primary">Action</Button>
              <Button theme="warning">Warning</Button>
              <Button theme="danger">Danger</Button>
            </ButtonGroup>
          </>
        ) : comp === "card" ? (
          <>
            <Card>
              <CardHeader>Some header</CardHeader>
              <CardImage
                src="https://via.placeholder.com/300x"
                alt="Some image"
              />
              <CardBody>
                <CardTitle>Some title</CardTitle>
                <p>Whaaaat?</p>
                <Button>Lol</Button>
              </CardBody>
              <CardFooter>Some footer</CardFooter>
            </Card>
          </>
        ) : comp === "container" ? (
          <Container>
            <Row>
              <Col style={{ border: "1px solid black" }}>Hello!</Col>
              <Col style={{ border: "1px solid black" }}>Hello!</Col>
              <Col style={{ border: "1px solid black" }}>Hello!</Col>
            </Row>
            <Row>
              <Col style={{ border: "1px solid black" }}>Hello!</Col>
              <Col style={{ border: "1px solid black" }}>Hello!</Col>
              <Col style={{ border: "1px solid black" }}>Hello!</Col>
              <Col style={{ border: "1px solid black" }}>Hello!</Col>
            </Row>
            <Row>
              <Col style={{ border: "1px solid black" }}>Hello!</Col>
              <Col style={{ border: "1px solid black" }}>Hello!</Col>
            </Row>
          </Container>
        ) : comp === "grid" ? (
          <Container>
            <Grid>
              <GridItem size="one-quarter">one-quarter</GridItem>
              <GridItem size="one-half">one-half</GridItem>
              <GridItem size="one-quarter">one-quarter</GridItem>
              <GridItem size="three-quarters">three quarters</GridItem>
              <GridItem>default</GridItem>
            </Grid>
          </Container>
        ) : null}
      </Container>
    </BrydonUI>
  );
};

export default App;
