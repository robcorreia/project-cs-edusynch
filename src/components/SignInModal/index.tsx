import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, ButtonClose, Title, ShowPasswordButton } from './styles'
import { Button } from '../Button'
import { EnvelopeSimple, Eye, LockKey, X } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SignUpModal } from '../SignUpModal';
import { useAuth } from '../../contexts/AuthContext';

interface IForm {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters').required('Password is required'),
  })
  .required()

export function SignInModal() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: IForm) => {
    console.log(data)

    login(data)

    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        altKey: false,
        code: "Escape",
        ctrlKey: false,
        isComposing: false,
        key: "Escape",
        location: 0,
        metaKey: false,
        repeat: false,
        shiftKey: false,
        which: 27,
        charCode: 0,
        keyCode: 27,
      })
    );
    navigate('/dashboard')
    reset()
  }

  function handleShowPassword(e: any) {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ButtonClose><X size={20} weight="bold" /></ButtonClose>
        <Title>Sign in to <span className='brand-text-coin'>Coin</span><span className='brand-text-synch'>Synch</span></Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-content'>
            <EnvelopeSimple size={17} weight='bold' />
            <input id='email' type='email' placeholder='Email' {...register("email")} />
          </div>
          <p className='error-message'>{errors.email?.message}</p>

          <div className='form-content'>
            <LockKey size={17} weight='bold' />
            <input id='password' type={!showPassword ? 'password' : 'text'} placeholder='Password' {...register("password")} />
            <ShowPasswordButton clicked={showPassword} className="show-password" onClick={handleShowPassword}><Eye /></ShowPasswordButton>
          </div>
          <p className='error-message'>{errors.password?.message}</p>
          <a className='password-forgot ' href="/">Forgot password?</a>
          <Button color='#ffffff' type="submit" size={384} textSize={16} height={48}>Sign in</Button>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <a className='sign-up-button' href='/'>Don't have an account? <strong>Sign up to <span className='brand-text-coin'>Coin</span><span className='brand-text-synch'>Synch</span></strong></a>
            </Dialog.Trigger>
            <SignUpModal />
          </Dialog.Root>

        </form>

      </Content>
    </Dialog.Portal >
  )
}