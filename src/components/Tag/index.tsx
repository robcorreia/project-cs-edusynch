import { Container } from "./styles";

interface TagProps {
  title: string;
}


export function Tag({ title }: TagProps) {

  return (
    <Container>
      <h5>{title}</h5>
    </Container>
  )
}