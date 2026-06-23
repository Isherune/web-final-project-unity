import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main className="page-enter">
        {children}
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;