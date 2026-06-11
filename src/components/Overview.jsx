function Overview() {
  const stats = [
    {
      value: "1200+",
      label: "Mahasiswa Aktif",
    },
    {
      value: "45",
      label: "Dosen",
    },
    {
      value: "10",
      label: "Laboratorium",
    },
    {
      value: "25",
      label: "Mitra Industri",
    },
  ];

  return (
    <section className="bg-slate-800 text-white py-20">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-700 p-6 rounded-xl text-center hover:-translate-y-1 transition"
            >
              <h2 className="text-4xl font-bold text-red-500">
                {item.value}
              </h2>

              <p className="mt-2 text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Tentang Teknik Informatika UNSRAT
          </h2>

          <p className="text-slate-300">
            Program Studi Teknik Informatika Universitas Sam Ratulangi
            berkomitmen menghasilkan lulusan yang unggul dalam
            bidang teknologi informasi, pengembangan perangkat lunak,
            kecerdasan buatan, jaringan komputer, dan inovasi digital.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Overview;