import uploadSvg from "../assets/upload.svg";

type Props = React.ComponentProps<"input"> & {
  filename?: string | null;
  legend?: string;
};

export default function Upload({ filename = null, legend, ...rest }: Props) {
  return (
    <div>
      {legend && (
        <legend className="uppercase text-gray-200 text-xxs">{legend}</legend>
      )}

      <div className="w-full h-12 flex items-center rounded-lg border border-gray-300 text-sm text-gray-100 bg-transparent outline-none">
        <input type="file" id="upload" className="hidden" {...rest} />

        <span className="text-xs text-gray-100 flex-1 pl-4">
          {filename ?? "Selecione o arquivo"}
        </span>

        <label
          htmlFor="upload"
          className="flex h-12 px-4 items-center bg-green-100 rounded-lg cursor-pointer disabled:opacity-50 hover:bg-green-200 transition ease-linear"
        >
          <img src={uploadSvg} alt="imagem de upload" className="h-6 w-6" />
        </label>
      </div>
    </div>
  );
}
