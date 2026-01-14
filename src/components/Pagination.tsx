import leftSvg from "../assets/left.svg";
import rightSvg from "../assets/right.svg";
import Button from "./Button";

type Props = {
  current: number;
  total: number;
};

export default function Pagination(props: Props) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="iconSmall">
        <img src={leftSvg} alt="icone seta esquerda" />
      </Button>

      <span className="text-sm text-gray-200">
        {props.current}/{props.total}
      </span>

      <Button variant="iconSmall">
        <img src={rightSvg} alt="icone seta direita" />
      </Button>
    </div>
  );
}
