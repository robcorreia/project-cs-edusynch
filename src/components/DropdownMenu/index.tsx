import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';
import { DropdownMenuOpen, DropdownMenuContent, DropdownMenuItem } from './styles';
import { CaretDown } from '@phosphor-icons/react';

export function DropdownMenu() {
  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuOpen>UserName <CaretDown size={12} weight="bold" /></DropdownMenuOpen>

      <DropdownMenuRadix.Portal>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <img src='images/logout-icon.svg' alt='Logout Icon' /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}