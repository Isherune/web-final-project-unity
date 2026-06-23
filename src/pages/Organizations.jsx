import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import organizationsData from "../data/organizations.json";
import Footer from "../components/Footer";

function Organizations() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-900 text-white py-32">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-center mb-10">
            Organisasi Mahasiswa
          </h1>

          <p className="text-center text-slate-400 mb-10">
            Organisasi dan komunitas yang aktif di lingkungan Teknik Informatika
            UNSRAT.
          </p>

          <Tabs organizations={organizationsData} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Organizations;
