import { Container, CheckboxRoot, CheckboxIndicator } from './styles';
import { useState } from 'react';
import { Check } from '@phosphor-icons/react';

export function Checkbox() {
  const [checked, setChecked] = useState('indeterminate');


  return (
    <Container>
      <CheckboxRoot id='terms'>
        <CheckboxIndicator>
          {checked && <Check size={12} weight="bold" />}

        </CheckboxIndicator>
      </CheckboxRoot>
      <label
        className="label"
        htmlFor="terms"
      >
        I have read and accept the <strong>Privacy Policy</strong> and <strong>Terms of User Sign up</strong>.
      </label>
    </Container>
  )
}

