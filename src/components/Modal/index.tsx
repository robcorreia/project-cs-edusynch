import * as Dialog from '@radix-ui/react-dialog';
import { Container } from './styles';
import { ReactNode } from 'react';

interface ModalProps {
  title?: string;
  content?: ReactNode;
}

export function Modal({ title, content }: ModalProps) {
  return (
    <Container>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Title>{title}</Dialog.Title>
          {content}
          <Dialog.Close />
        </Dialog.Content>
      </Dialog.Portal>
    </Container>

  )
}