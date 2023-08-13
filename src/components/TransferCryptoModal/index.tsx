import * as Dialog from '@radix-ui/react-dialog'
import { Overlay, Content, ButtonClose, Title } from './styles'
import { Button } from '../Button'
import { X } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"

interface IForm {
  crypto: string;
  quantity: number;
}

const schema = yup
  .object({
    crypto: yup.string().required('Crypto is required'),
    quantity: yup.number().min(1, 'Quantity must be at least 1 characters').required('Quantity is required'),
  })
  .required()

export function TransferCrypto() {

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

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <ButtonClose><X size={20} weight="bold" /></ButtonClose>
        <Title>Transfer Crypto</Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="crypto">Transfer</label>
          <div className='form-content'>
            <input id='crypto' type='text' placeholder='Select transfer' {...register("crypto")} />
          </div>
          <p className='error-message'>{errors.crypto?.message}</p>

          <label htmlFor="quantity">Quantity</label>

          <div className='form-content'>
            <input id='quantity' type="number" placeholder='0,00' {...register("quantity")} />
          </div>
          <p className='error-message'>{errors.quantity?.message}</p>
          <Button color='#ffffff' type="submit" size={370} textSize={16} height={48}>Transfer Cyrpto</Button>

        </form>

      </Content>
    </Dialog.Portal >
  )
}