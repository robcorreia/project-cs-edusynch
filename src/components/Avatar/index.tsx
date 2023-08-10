import { Container } from "./styles";

interface AvatarProps {
  userImage?: string;
}

export function Avatar({ userImage = 'images/avatar-default.svg' }: AvatarProps) {

  return (
    <Container>
      <img src={userImage} alt="Avatar" />
    </Container>
  )
}