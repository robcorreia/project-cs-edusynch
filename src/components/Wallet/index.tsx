
import { useEffect, useState } from "react";
import { AddCryptoModal } from "../AddCryptoModal";
import { Button } from "../Button";
import { Container, EmptyWallet } from "./styles";
import * as Dialog from '@radix-ui/react-dialog'
import { api } from "../../service";
import { Table } from "../Table";
import { TransferCrypto } from "../TransferCryptoModal";

interface IData {
  asset_id: string;
  name: string;
  price_usd: number;
}

export function Wallet() {
  const [data, setData] = useState<IData[]>()


  const getData = async (limit: number) => {
    try {
      const response = await api.get('v1/assets/');
      const data = response.data.slice(1, limit)
      setData(data)
    } catch (e: any) {
    } finally {
      return

    }
  }

  useEffect(() => {
    getData(5)
  }, [])

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

      {!data ? <EmptyWallet>
        <img src="images/wallet-empty-icon.svg" alt="" />
        <h5>Nothing here yet...</h5>
        <p>Add a crypto and start earning</p>
      </EmptyWallet> : <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Crypto</th>
            <th>Price</th>
            <th>Change</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, index) => (
            <tr key={item.asset_id}>
              <td className="position">{index !== 10 ? `0${index + 1}` : ''}</td>
              <td className="coin">{item.name} <span className="initials">{item.asset_id}</span></td>
              <td className="price">{'US' + (new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price_usd))}</td>
              <td className="change"><span className="up">+5,65%</span></td>
              <td className="trade">
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button className="transfer-button"><img src="images/transfer-icon.svg" alt="transfer button" /></button>
                  </Dialog.Trigger>
                  <TransferCrypto />
                </Dialog.Root></td>
            </tr>
          ))}

        </tbody>
      </Table>}



    </Container>
  )
}