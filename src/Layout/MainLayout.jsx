import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header/Header";

const MainLayout = () => {
  return (
    <>
      <header className="max-w-7xl px-4 md:px-0 mx-auto">
        <div className="relative">
          <Header />
        </div>
      </header>

      <main className="max-w-7xl px-4 md:px-0 mx-auto">
        <Outlet />
      </main>

      <footer className="max-w-7xl px-4 md:px-0 mx-auto">
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
