import { Outlet } from "react-router-dom";
import Header from "../component/Header"; // Adjust based on the actual location
import Footer from "../component/Footer";

function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
