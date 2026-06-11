function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center pt-20">      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10">

        <div>
          <p className="text-red-500 font-semibold mb-3">
            PROGRAM STUDI
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Teknik Informatika
            <span className="block text-red-500">
              UNSRAT
            </span>
          </h1>

          <p className="mt-6 text-slate-300 text-lg">
            Mencetak talenta digital, inovator teknologi,
            dan pemimpin masa depan melalui pendidikan,
            penelitian, dan pengabdian masyarakat.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-700 transition">
              Lihat Kurikulum
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Lihat Fasilitas
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="https://i.ytimg.com/vi/EyEe6V1cXpI/maxresdefault.jpg"
            alt="Programming"
            className="rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;