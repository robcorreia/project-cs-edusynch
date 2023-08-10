import * as TooltipRadix from '@radix-ui/react-tooltip';
import { TooltipTrigger, TooltipContent } from './styles';

interface TooltipProps extends TooltipRadix.TooltipContentProps {
  buttonIcon: string;
  label: string;
}

export function Tooltip({ buttonIcon, label, side, sideOffset }: TooltipProps) {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root>
        <TooltipTrigger asChild>
          <button><img src={buttonIcon} alt={label} /></button>
        </TooltipTrigger>
        <TooltipRadix.Portal>
          <TooltipContent side={side} sideOffset={sideOffset}>
            <p>{label}</p>
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}