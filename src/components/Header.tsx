import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";

export default function Header() {
  return (
    <header className="w-full flex justify-between px-23 py-10">
      <img src={logo} alt="logo" />

      <div className="flex gap-3 items-center">
        <span className="text-sm font-semibold text-gray-200">
          Olá, Rodrigo
        </span>
        <img
          src={logout}
          alt="icone de sair"
          className="cursor-pointer hover:opacity-70 transition ease-linear"
        />
      </div>
    </header>
  );
}
