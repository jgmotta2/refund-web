type Props = React.ComponentProps<"input"> & {
  legend: string;
};

export default function Input({ legend, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase mb-2 text-xxs text-inherit">
          {legend}
        </legend>
      )}

      <input
        type="text"
        {...rest}
        className="w-full border border-gray-300  rounded-lg px-4 h-12 outline-none text-sm text-gray-100 bg-transparent focus:border-green-100 focus:border-2 placeholder-gray-300"
      />
    </fieldset>
  );
}
