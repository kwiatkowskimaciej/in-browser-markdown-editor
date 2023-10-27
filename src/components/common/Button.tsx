import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '../utils/utils';

const buttonVariants = cva(
  'h-10 w-10 rounded bg-[#E46643] hover:bg-[#F39765] flex items-center justify-center',
  {
    variants: {
      variant: {
        default: '',
        icon: 'flex items-center gap-2 capitalize',
        iconSecondary:
          'bg-transparent fill-current fill-[#7C8187] hover:bg-transparent hover:fill-white',
      },
      size: {
        default: '',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
