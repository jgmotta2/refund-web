type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export default function Button({
  children,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      disabled={isLoading}
      type={type}
      {...rest}
      className="bg-green-100 rounded-lg text-white flex justify-center items-center h-12 cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}
