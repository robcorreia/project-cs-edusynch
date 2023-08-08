import { Button } from "../Button";
import { Section } from "../Section";
import * as Dialog from '@radix-ui/react-dialog'
import { Container, Brand, Nav, UserNav } from "./styles";
import { SignInModal } from "../SignInModal";
import { SignUpModal } from "../SignUpModal";


export function Header() {

  return (
    <Container>
      <Section>
        <Brand><img src="images/brand-header.svg" alt="CoinSynch" /></Brand>

        <Nav>
          <li><a href="/">About us</a></li>
          <li><a href="/">Top Coins</a></li>
        </Nav>

        <UserNav>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button size={100} height={32} textSize={14} transparent>Sign in</Button>
            </Dialog.Trigger>
            <SignInModal />
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button color="#ffffff" size={100} textSize={14} height={32}>Sign up</Button>
            </Dialog.Trigger>
            <SignUpModal />
          </Dialog.Root>

        </UserNav>

      </Section>
    </Container>
  )
}