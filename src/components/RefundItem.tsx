import { FormatCurrency } from "../utils/formatCurrency";

export type RefundItemProps = {
  id: string;
  amount: number;
  name: string;
  description: string;
  categoryImg: string;
};

type Props = React.ComponentProps<"a"> & {
  data: RefundItemProps;
};

export default function RefundItem({ data, ...rest }: Props) {
  return (
    <a
      href=""
      {...rest}
      className="flex items-center gap-2 hover:bg-green-100/5 rounded-md px-2"
    >
      <img src={data.categoryImg} alt="Icone de categoria" />

      <div className="flex flex-col flex-1">
        <strong className="text-sm text-gray-100">{data.name}</strong>
        <span className="text-xs text-gray-200">{data.description}</span>
      </div>

      <span className="text-sm text-gray-100 font-semibold">
        <small className="font-normal text-gray-200">R$</small>
        {FormatCurrency(data.amount)}
      </span>
    </a>
  );
}
