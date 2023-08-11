
import { AddCryptoModal } from "../AddCryptoModal";
import { Button } from "../Button";
import { Container, EmptyWallet } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'

export function Wallet() {
  const data = false;
  return (
    <Container>
      <header className="header">
        <div className="title">
          <img src="images/icon-link-4.svg" alt="Wallet Icon" />
          <h4>My Wallet</h4>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <Button color="#ffffff" size={120} height={32}><span>+</span> Add crypto</Button>
          </Dialog.Trigger>
          <AddCryptoModal />
        </Dialog.Root>
      </header>

      {!data && <EmptyWallet>
        <img src="images/wallet-empty-icon.svg" alt="" />
        <h5>Nothing here yet...</h5>
        <p>Add a crypto and start earning</p>
      </EmptyWallet>}

    </Container>
  )
}