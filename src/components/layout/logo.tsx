import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={cn('inline-flex items-center gap-2', className)} aria-label="ZancaVolt - Início">
      <span className="flex size-8 items-center justify-center rounded-md bg-primary text-ink" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="size-6" fill="currentColor">
          <path d="M5 4.5h14v4L11 15.5h8v4H5v-4L13 8.5H5z" />
        </svg>
      </span>
      <span className="text-2xl font-extrabold tracking-tight text-ink-foreground">
        Zanca<span className="text-primary">Volt</span>
      </span>
    </a>
  )
}
