type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <div className="mx-auto max-w-7xl px-20">{children}</div>
}
