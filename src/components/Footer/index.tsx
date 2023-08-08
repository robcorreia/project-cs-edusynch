import { Section } from "../Section"
import { Container } from "./styles"

export function Footer() {

  return (
    <Container>
      <Section>
        <p>Copyright © 2022 -  All rights reserved</p>
        <a href="#">
          <img src="images/brand-footer.svg" alt="Coin Sync Brand" />
        </a>
      </Section>
    </Container>
  )
}