import { classMerge } from "../utils/classMerge";

type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
  variant?: "base" | "icon";
};

const variants = {
  button: {
    base: "h-12",
    icon: "h-12 w-12",
  },
};

export default function Button({
  children,
  variant = "base",
  className,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      disabled={isLoading}
      type={type}
      className={classMerge([
        "bg-green-100 rounded-lg text-white flex justify-center items-center cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed",
        variants.button[variant],
        className,
      ])}
      {...rest}
    >
      {children}
    </button>
  );
}
