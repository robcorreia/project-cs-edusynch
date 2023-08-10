import { Tooltip } from "../Tooltip";
import { Container } from "./styles";


export function SideMenu() {

  return (
    <Container>
      <Tooltip buttonIcon="images/icon-link-1.svg" label="Lorem Ipsum" side="right" sideOffset={16} />
      <Tooltip buttonIcon="images/icon-link-2.svg" label="Lorem Ipsum" side="right" sideOffset={16} />
      <Tooltip buttonIcon="images/icon-link-3.svg" label="Lorem Ipsum" side="right" sideOffset={16} />
      <Tooltip buttonIcon="images/icon-link-4.svg" label="Lorem Ipsum" side="right" sideOffset={16} />
    </Container>
  )
}