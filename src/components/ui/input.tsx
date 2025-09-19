import { cn } from '@/lib/utils'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...rest } = props
  return <input className={cn('input-field', className)} {...rest} />
}
