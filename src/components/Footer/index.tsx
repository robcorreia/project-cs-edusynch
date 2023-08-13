import { useAuth } from "../../contexts/AuthContext";
import { Section } from "../Section"
import { Container } from "./styles"

export function Footer() {
  const { user } = useAuth();
  const userAuth = user.email.length > 0;
  return (
    <Container userlogged={userAuth}>
      <Section>
        <p>Copyright © 2022 -  All rights reserved</p>
        {!userAuth && <a href="/">
          <img src="images/brand-footer.svg" alt="Coin Sync Brand" />
        </a>}
      </Section>
    </Container>
  )
}