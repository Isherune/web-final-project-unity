import { Link } from "react-router-dom";

const navLink =
  "px-4 py-2 rounded-full border-slate-800 hover:border-cyan-800 hover:bg-cyan-800 hover:text-white hover:transition-all hover:duration-200 hover:scale-105";

function Navbar() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3 flex items-center gap-11 shadow-xl">
        <div className="flex items-center gap-2">
          <img
            src="/logo_unsrat.png"
            alt="Logo UNSRAT"
            className="h-8 w-8 object-cover"
          />
          <h1 className="font-bold text-cyan-600"> IT UNSRAT </h1>
        </div>

        <div className="flex gap-6">
          <Link to="/" className={navLink}>
            Beranda
          </Link>

          <Link to="/profile" className={navLink}>
            Profil
          </Link>

          <Link to="/lecturers" className={navLink}>
            Dosen
          </Link>

          <Link to="/academic" className={navLink}>
            Akademik
          </Link>

          <Link to="/organizations" className={navLink}>
            Organisasi
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
