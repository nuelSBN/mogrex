/*eslint-disable*/
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserDropdown from "../Dropdowns/UserDropdown";
import NotificationDropdown from "../Dropdowns/NotificationDropdown";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");

  const navigationLinks = [
    {
      category: "Admin Layout Pages",
      links: [
        { to: "/", label: "Dashboard", icon: "fas fa-tv" },
        { to: "/tables", label: "Tables", icon: "fas fa-table" },
      ],
    },
    {
      category: "Auth Layout Pages",
      links: [
        { to: "/auth/login", label: "Login", icon: "fas fa-fingerprint" },
        {
          to: "/auth/register",
          label: "Register",
          icon: "fas fa-clipboard-list",
        },
      ],
    },
  ];
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const hadleNavigation = ({ path }: any) => {
    navigate(path);
  };

  return (
    <>
      <nav
        className={`md:left-0 md:fixed md:top-0 md:bottom-0 md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 ${
          collapseShow !== "hidden" ? "h-screen " : ""
        }`}
      >
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          <div
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded"
            onClick={() =>
              setCollapseShow(
                collapseShow === "hidden" ? "bg-white m-2 py-3 px-6" : "hidden"
              )
            }
          >
            <i className="fas fa-bars"></i>
          </div>

          <Link
            className="text-blueGray-600 text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Mogrex
          </Link>

          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>

          <div
            className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
          >
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-blueGray-200">
              <div className="flex justify-between">
                <Link
                  className="text-blueGray-600 text-sm uppercase font-bold p-4 px-0"
                  to="/"
                >
                  Mogrex
                </Link>
                <div
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl bg-transparent rounded"
                  onClick={() => setCollapseShow("hidden")}
                >
                  <i className="fas fa-times"></i>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded w-full"
                />
              </div>
            </form>

            {navigationLinks.map((section, index) => (
              <div key={index}>
                <hr className="my-4 md:min-w-full" />
                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4">
                  {section.category}
                </h6>
                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                  {section.links.map((link, idx) => (
                    <li key={idx} className="items-center cursor-pointer">
                      <div
                        className={`text-xs uppercase py-3 font-bold block ${
                          pathname === link.to
                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                            : "text-blueGray-700 hover:text-blueGray-500"
                        }`}
                        onClick={() => hadleNavigation(link.to)}
                      >
                        <i
                          className={`${link.icon} mr-2 text-sm ${
                            pathname === link.to
                              ? "opacity-75"
                              : "text-blueGray-300"
                          }`}
                        ></i>{" "}
                        {link.label}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
