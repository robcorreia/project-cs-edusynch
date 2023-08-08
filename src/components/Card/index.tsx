import { Container } from "./styles";

interface CardProps {
  upTitle: string;
  title: string;
  description: string;
  icon: string;
}

export function Card({ upTitle, title, description, icon }: CardProps) {
  return (
    <Container>
      <img className="icon" src={icon} alt="Icon" />
      <p>{upTitle}</p>
      <h4>{title}</h4>
      <span>{description}</span>
    </Container>
  )
}