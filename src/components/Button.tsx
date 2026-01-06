type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export default function Button({
  children,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return <Button {...rest}>{children}</Button>;
}
