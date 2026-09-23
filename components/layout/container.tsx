import { cn } from "cn"

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-20", className)}>{children}</div>
  )
}
