import { Button } from "../Button";
import { Section } from "../Section";
import * as Dialog from '@radix-ui/react-dialog'
import { Container, Brand, Nav, UserNav, MenuProfile, DropdownMenuItem, DropdownMenuContent, DropdownMenuOpen } from "./styles";
import { SignInModal } from "../SignInModal";
import { SignUpModal } from "../SignUpModal";
import { Avatar } from "../Avatar";
import { useAuth } from "../../contexts/AuthContext";
import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';
import { CaretDown } from "@phosphor-icons/react";


export function Header() {
  const { user, logout } = useAuth()

  const userAuth = user.email.length > 0

  return (
    <Container userLogged={userAuth}>
      <Section>
        <Brand><img src="images/brand-header.svg" alt="CoinSynch" /></Brand>


        {!userAuth && <Nav>
          <li><a href="/">About us</a></li>
          <li><a href="/">Top Coins</a></li>
        </Nav>}

        {!userAuth &&
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

          </UserNav>}

        {userAuth &&
          <MenuProfile>
            <Avatar userImage="images/avatar.png" />
            <DropdownMenuRadix.Root>
              <DropdownMenuOpen>UserName <CaretDown size={12} weight="bold" /></DropdownMenuOpen>

              <DropdownMenuRadix.Portal>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={logout}>
                    <img src='images/logout-icon.svg' alt='Logout Icon' /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuRadix.Portal>
            </DropdownMenuRadix.Root>
          </MenuProfile>}

      </Section>
    </Container>
  )
}