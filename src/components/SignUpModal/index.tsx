import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, ButtonClose, Title, ShowPasswordButton } from './styles'
import { Button } from '../Button'
import { EnvelopeSimple, Eye, LockKey, User, X } from '@phosphor-icons/react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IUserSubmitForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().min(6, 'Password must be at least 6 characters')
      .max(20, 'Password must not exceed 20 characters').required('Password is required'),
    confirmPassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('password')], 'Confirm Password does not match'),
    acceptTerms: yup.bool().oneOf([true], 'Accept Terms is required').default(false)
  })
  .required()

export function SignUpModal() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUserSubmitForm>({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data: IUserSubmitForm) => {
    console.log(data)
    navigate('/dashboard')
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
        <Title>Sign up to <span className='brand-text-coin'>Coin</span><span className='brand-text-synch'>Synch</span></Title>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className='form-content'>
            <User size={17} weight='bold' />
            <input id='name' type='text' placeholder='Name' {...register("name")} />
          </div>
          <p className='error-message'>{errors.name?.message}</p>

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

          <div className='form-content'>
            <LockKey size={17} weight='bold' />
            <input id='confirmPassword' type={!showPassword ? 'password' : 'text'} placeholder='Confirm password' {...register("confirmPassword")} />
            <ShowPasswordButton clicked={showPassword} className="show-password" onClick={handleShowPassword}><Eye /></ShowPasswordButton>
          </div>
          <p className='error-message'>{errors.confirmPassword?.message}</p>

          <div className='terms'>

            <label className='acceptTerms' htmlFor="acceptTerms">
              I have read and accept the <strong>Privacy Policy</strong> and <strong>Terms of User Sign up</strong>.

              <input className='checkbox'
                id='acceptTerms'
                type="checkbox"
                {...register('acceptTerms')}
              />
              <span className="checkmark"></span>
            </label>
          </div>

          <p className='error-message'>{errors.acceptTerms?.message}</p>
          <Button color='#ffffff' type="submit" size={384} textSize={16} height={48}>Sign in</Button>
          <a className='sign-up-button' href='/'>Don't have an account? <strong>Sign up to <span className='brand-text-coin'>Coin</span><span className='brand-text-synch'>Synch</span></strong></a>

        </form>

      </Content>
    </Dialog.Portal >
  )
}