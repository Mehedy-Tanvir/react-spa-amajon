import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Spinner from "../Components/Spinner/Spinner";
import { NavLink } from "react-router-dom";
const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <div>
        <section className="flex justify-between px-10 shadow-md py-7">
          <div>
            <h1 className="text-xl font-bold">Amajon</h1>
          </div>
          <nav>
            <ul className="flex gap-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
        {navigation.state === "loading" ? (
          <Spinner></Spinner>
        ) : (
          <div className="min-h-screen">
            <Outlet></Outlet>
          </div>
        )}
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
