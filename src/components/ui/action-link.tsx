import { cva, type VariantProps } from 'class-variance-authority'
import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export const actionVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary-light',
        dark: 'bg-ink text-ink-foreground hover:bg-ink-hover',
        outline: 'border border-ink-foreground/40 text-ink-foreground hover:border-primary hover:text-primary',
        'outline-light': 'border border-border text-foreground hover:border-foreground',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof actionVariants> & { external?: boolean }

export function ActionLink({ className, variant, size, external, ...props }: ActionLinkProps) {
  return (
    <a
      className={cn(actionVariants({ variant, size }), className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    />
  )
}
