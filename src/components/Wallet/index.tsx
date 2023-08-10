import { Plus } from "@phosphor-icons/react";
import { Button } from "../Button";
import { Container } from "./styles";

export function Wallet() {
  const data = false;
  return (
    <Container>
      <header>
        <div>
          <img src="images/icon-link-1.svg" alt="Wallet Icon" />
          <h4>My Wallet</h4>
        </div>
        <Button size={120} height={32}><Plus size={32} weight="bold" /> Add crypto</Button>
      </header>

      {!data && <div>
        <img src="images/wallet-empty-icon.svg" alt="" />
        <h5>Nothing here yet...</h5>
        <p>Add a crypto and start earning</p>
      </div>}

    </Container>
  )
}