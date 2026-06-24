import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";
import coursesData from "../data/courses.json";
import Footer from "../components/Footer";

function Academic() {
  return (
    <>
      <Navbar />

      <div className="relative min-h-screen bg-gray-300 text-slate-800 py-32 overflow-hidden">
        {/* foto segitiga kanan bawah */}
        <div
          className="
            absolute
            bottom-0
            right-0
            w-[140vw]
            h-[140vw]
            opacity-20
            pointer-events-none
          "
        >
          <img
            src="kelasmhs.jpeg"
            alt="Mahasiswa"
            className="
              w-full
              h-full
              object-cover
              [clip-path:polygon(100%_0,0_100%,100%_100%)]
            "
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl font-bold text-center mb-10">
            Informasi Akademik
          </h1>

          <p className="text-center text-slate-700 mb-10">
            Daftar mata kuliah berdasarkan semester.
          </p>

          <div className="space-y-4 max-w-3xl mx-auto">
            {coursesData.map((semester) => (
              <Accordion
                key={semester.semester}
                semester={semester.semester}
                courses={semester.courses}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Academic;
