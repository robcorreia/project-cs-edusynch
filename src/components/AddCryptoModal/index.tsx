import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, ButtonClose, Title } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { X } from '@phosphor-icons/react'


export function AddCryptoModal() {

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ButtonClose><X size={20} weight="bold" /></ButtonClose>
        <Title>Add Crypto</Title>
        <form>
          <Input outilened type='text' placeholder='Choose Crypto' required />
          <Input type='number' placeholder='0,00' outilened={true} required />
          <Button color='#ffffff' type="submit" size={384} textSize={16} height={48}>Add Crypto</Button>
        </form>
      </Content>
    </Dialog.Portal >
  )
}