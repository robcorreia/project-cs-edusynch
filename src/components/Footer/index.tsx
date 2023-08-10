import { Section } from "../Section"
import { Container } from "./styles"

export function Footer() {
  const userAuth = true;
  return (
    <Container userLogged={userAuth}>
      <Section>
        <p>Copyright © 2022 -  All rights reserved</p>
        {!userAuth && <a href="/">
          <img src="images/brand-footer.svg" alt="Coin Sync Brand" />
        </a>}
      </Section>
    </Container>
  )
}