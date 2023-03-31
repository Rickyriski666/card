import Container from "../base/Container";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
import CardImage from "./CardImage";

export default function Card() {
  return (
    <Container>
      <CardImage src="src\assets\img-profile.png" />
      <CardBody />
      <CardFooter />
    </Container>
  );
}
