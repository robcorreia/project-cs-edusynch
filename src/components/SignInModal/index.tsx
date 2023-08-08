import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, ButtonClose, Title } from './styles'
import { Input } from '../Input'
import { Button } from '../Button'
import { EnvelopeSimple, Eye, LockKey, X } from '@phosphor-icons/react'


export function SignInModal() {

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ButtonClose><X size={20} weight="bold" /></ButtonClose>
        <Title>Sign in to <span className='brand-text-coin'>Coin</span><span className='brand-text-synch'>Synch</span></Title>
        <form>
          <Input startIcon={<EnvelopeSimple size={16} />} outilened type='email' placeholder='Email' required />
          <Input startIcon={<LockKey size={16} />} endIcon={<Eye size={16} />} type='password' placeholder='Password' outilened={true} required />
          <a className='password-forgot' href='/'>Forgot password?</a>
          <Button color='#ffffff' type="submit" size={384} textSize={16} height={48}>Sign in</Button>
          <a className='sign-up-button' href='/'>Don't have an account? <strong>Sign up to <span className='brand-text-coin'>Coin</span><span className='brand-text-synch'>Synch</span></strong></a>
        </form>
      </Content>
    </Dialog.Portal >
  )
}