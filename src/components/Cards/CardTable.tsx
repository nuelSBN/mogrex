import React from "react";
import TableDropDown from "../Dropdowns/TableDropdown";
import dummyuser1 from "../../assets/img/team-1-800x800.jpg";
import dummyuser2 from "../../assets/img/team-2-800x800.jpg";
import dummyuser3 from "../../assets/img/team-3-800x800.jpg";
import dummyuser4 from "../../assets/img/team-4-470x470.png";
import angular from "../../assets/img/angular.jpg";
import bootstrap from "../../assets/img/bootstrap.jpg";
import sketch from "../../assets/img/sketch.jpg";
import react from "../../assets/img/react.jpg";

// Components
// import TableDropdown from "components/Dropdowns/TableDropdown";

// Types
interface CardTableProps {
  color?: "light" | "dark";
}

const CardTable: React.FC<CardTableProps> = ({ color = "light" }) => {
  const tableHeaders = ["Project", "Budget", "Status", "Users", "Completion"];

  const data = [
    {
      img: bootstrap,
      project: "Argon Design System",
      budget: "$2,500 USD",
      status: { iconColor: "text-orange-500", label: "pending" },
      users: [dummyuser1, dummyuser2, dummyuser3, dummyuser4],
      completion: 60,
      completionColor: "bg-red-500",
    },
    {
      img: angular,
      project: "Angular Now UI Kit PRO",
      budget: "$1,800 USD",
      status: { iconColor: "text-emerald-500", label: "completed" },
      users: [dummyuser1, dummyuser2, dummyuser3, dummyuser4],
      completion: 100,
      completionColor: "bg-emerald-500",
    },
    {
      img: sketch,
      project: "Black Dashboard Sketch",
      budget: "$3,150 USD",
      status: { iconColor: "text-red-500", label: "delayed" },
      users: [dummyuser1, dummyuser2, dummyuser3, dummyuser4],
      completion: 73,
      completionColor: "bg-red-500",
    },
    {
      img: react,
      project: "React Material Dashboard",
      budget: "$4,400 USD",
      status: { iconColor: "text-teal-500", label: "on schedule" },
      users: [dummyuser1, dummyuser2, dummyuser3, dummyuser4],
      completion: 90,
      completionColor: "bg-teal-500",
    },
  ];

  const getColorClass = (
    color: string,
    lightClass: string,
    darkClass: string
  ) => (color === "light" ? lightClass : darkClass);

  return (
    <div
      className={`relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ${
        color === "light" ? "bg-white" : "bg-lightBlue-900 text-white"
      }`}
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={`font-semibold text-lg ${getColorClass(
                color,
                "text-blueGray-700",
                "text-white"
              )}`}
            >
              Card Tables
            </h3>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              {tableHeaders.map((header) => (
                <th
                  key={header}
                  className={`px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ${getColorClass(
                    color,
                    "bg-blueGray-50 text-blueGray-500 border-blueGray-100",
                    "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
                  )}`}
                >
                  {header}
                </th>
              ))}
              <th className="px-6 align-middle border border-solid py-3 border-l-0 border-r-0 whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    src={item.img}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt={item.project}
                  />
                  <span
                    className={`ml-3 font-bold ${getColorClass(
                      color,
                      "text-blueGray-600",
                      "text-white"
                    )}`}
                  >
                    {item.project}
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {item.budget}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i
                    className={`fas fa-circle ${item.status.iconColor} mr-2`}
                  />
                  {item.status.label}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    {item.users.map((userImg, i) => (
                      <img
                        key={i}
                        src={userImg}
                        alt="user"
                        className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4 first:ml-0"
                      />
                    ))}
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">{item.completion}%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        {/* <div
                          style={{ width: `${item.completion}%` }}
                          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${item.completionColor}`}
                        /> */}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropDown />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CardTable;
