import Navbar from "../components/Navbar";
import Accordion from "../components/Accordion";
import coursesData from "../data/courses.json";
import Footer from "../components/Footer";

function Academic() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-10">
            Informasi Akademik
          </h1>

          <p className="text-center text-slate-400 mb-10">
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
