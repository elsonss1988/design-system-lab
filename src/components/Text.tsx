import {clsx} from 'clsx';
import {Slot} from '@radix-ui/react-slot'
import { ReactNode } from 'react';


export interface TextProps{
    size?:'sm'|'md'|'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

export const Text = ({size = 'md',children, asChild, className } : TextProps) => {
    const Comp =  asChild? Slot: 'span';
    return (
        <>
          <Comp className={clsx("text-gray-100 font-sans",{
                'text-sm': size === 'sm',
                'text-md': size === 'md',
                'text-lg': size === 'lg',
            },className,
          )}>{children}</Comp>
        </>
    )

}