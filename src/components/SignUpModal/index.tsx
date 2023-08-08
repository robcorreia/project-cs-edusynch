import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, ButtonClose, Title } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { EnvelopeSimple, Eye, LockKey, User, X } from '@phosphor-icons/react'
import { Checkbox } from '../Checkbox'


export function SignUpModal() {

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ButtonClose><X size={20} weight="bold" /></ButtonClose>
        <Title>Sign up to <span className='brand-text-coin'>Coin</span><span className='brand-text-synch'>Synch</span></Title>
        <form>
          <Input startIcon={<User size={16} />} outilened type='text' placeholder='Name' required />
          <Input startIcon={<EnvelopeSimple size={16} />} outilened type='email' placeholder='Email' required />
          <Input startIcon={<LockKey size={16} />} endIcon={<Eye size={16} />} type='password' placeholder='Password' outilened={true} required />
          <Input startIcon={<LockKey size={16} />} endIcon={<Eye size={16} />} type='password' placeholder='Confirm password' outilened={true} required />
          <Checkbox />
          <Button color='#ffffff' type="submit" size={384} textSize={16} height={48}>Sign up</Button>
          <a className='sign-up-button' href='/'>Already have and account? <strong>Sign in to <span className='brand-text-coin'>Coin</span><span className='brand-text-synch'>Synch</span></strong></a>
        </form>
      </Content>
    </Dialog.Portal >
  )
}