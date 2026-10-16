import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  id,
}: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn('flex max-w-2xl flex-col gap-3', align === 'center' && 'mx-auto items-center text-center')}>
      <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-yellow-600 uppercase data-[dark=true]:text-primary" data-dark={dark}>
        <span className="h-px w-6 bg-current" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2
        id={id}
        className={cn(
          'text-3xl leading-tight font-bold tracking-tight md:text-4xl',
          dark ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn('text-base leading-relaxed md:text-lg', dark ? 'text-ink-muted' : 'text-muted-foreground')}>
          {description}
        </p>
      )}
    </div>
  )
}
