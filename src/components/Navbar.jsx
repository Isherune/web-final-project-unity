import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50 border-b border-slate-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-red-500">
          TI UNSRAT
        </h1>

        <div className="flex gap-6">
          <Link to="/" className="hover:text-red-500 transition">
            Beranda
          </Link>

          <Link to="/profile" className="hover:text-red-500 transition">
            Profil
          </Link>

          <Link to="/lecturers" className="hover:text-red-500 transition">
            Dosen
          </Link>

          <Link to="/academic" className="hover:text-red-500 transition">
            Akademik
          </Link>

          <Link to="/organizations" className="hover:text-red-500 transition">
            Organisasi
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;