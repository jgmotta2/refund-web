export default function NotFound() {
  return (
    <div className=" h-screen w-screen flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl text-green-800">
        Ops, essa página não existe! 😓
      </h1>
      <a
        href="/"
        className="hover:text-green-200 font-semibold transition ease-linear"
      >
        Voltar ao início
      </a>
    </div>
  );
}
