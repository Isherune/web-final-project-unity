import { Link } from "react-router-dom";
import StatisticCounter from "./StatisticCounter";

function Hero() {
  const stats = [
    {
      value: 1200,
      label: "Mahasiswa Aktif",
    },
    {
      value: 45,
      label: "Dosen",
    },
    {
      value: 10,
      label: "Laboratorium",
    },
    {
      value: 25,
      label: "Mitra Industri",
    },
  ];

  return (
    <section
      className="min-h-screen text-white relative flex flex-col justify-center items-center"
      style={{
        backgroundImage:
          "url('https://i.ytimg.com/vi/EyEe6V1cXpI/maxresdefault.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/85"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-6 pt-40 pb-24">
        <p className="text-cyan-600 font-semibold mb-4 tracking-widest">
          PROGRAM STUDI
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Teknik Informatika
          <span className="block text-cyan-600">UNSRAT</span>
        </h1>

        <p className="mt-6 text-slate-200 text-lg max-w-2xl mx-auto">
          Mencetak talenta digital, inovator teknologi, dan pemimpin masa depan
          melalui pendidikan, penelitian, dan pengabdian masyarakat.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/curriculum"
            className="bg-cyan-600 px-6 py-3 rounded-full hover:bg-cyan-800 transition-all duration-300 hover:scale-105"
          >
            Lihat Kurikulum
          </Link>

          <Link
            to="/facilities"
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
          >
            Lihat Fasilitas
          </Link>
        </div>

        {/* Statistics */}
        <div className="mt-40 w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto hover:scale-105 transition-transform duration-300">
            {stats.map((item, index) => (
              <StatisticCounter
                key={index}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
