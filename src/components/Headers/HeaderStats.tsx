import React from "react";
import CardStats from "../Cards/CardStats";

// Components
// import CardStats from "components/Cards/CardStats";

const HeaderStats: React.FC = () => {
  // Array of stats for easier management and scalability
  const stats = [
    {
      statSubtitle: "TRAFFIC",
      statTitle: "350,897",
      statArrow: "up",
      statPercent: "3.48",
      statPercentColor: "text-emerald-500",
      statDescription: "Since last month",
      statIconName: "far fa-chart-bar",
      statIconColor: "bg-red-500",
    },
    {
      statSubtitle: "NEW USERS",
      statTitle: "2,356",
      statArrow: "down",
      statPercent: "3.48",
      statPercentColor: "text-red-500",
      statDescription: "Since last week",

      statIconName: "fas fa-users",
      statIconColor: "bg-orange-500",
    },
    {
      statSubtitle: "SALES",
      statTitle: "924",
      statArrow: "down",
      statPercent: "1.10",
      statPercentColor: "text-orange-500",
      statDescription: "Since yesterday",
      statIconName: "fas fa-chart-pie",
      statIconColor: "bg-pink-500",
    },
    {
      statSubtitle: "PERFORMANCE",
      statTitle: "49.65%",
      statArrow: "up",
      statPercent: "12",
      statPercentColor: "text-emerald-500",
      statDescription: "Since last month",
      statIconName: "fas fa-percent",
      statIconColor: "bg-lightBlue-500",
    },
  ];

  return (
    <div className="relative bg-slate-800 md:pt-32 pb-32 pt-12">
      <div className="px-4 md:px-10 mx-auto w-full">
        <div className="flex flex-wrap">
          {stats.map((stat, index) => (
            <div key={index} className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle={stat.statSubtitle}
                statTitle={stat.statTitle}
                statArrow={stat.statArrow}
                statPercent={stat.statPercent}
                statPercentColor={stat.statPercentColor}
                statDescripiron={stat.statDescription}
                statIconName={stat.statIconName}
                statIconColor={stat.statIconColor}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderStats;
