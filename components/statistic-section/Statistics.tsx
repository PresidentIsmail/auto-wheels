import React from "react";

import { AUTO_WHEELS_STATS } from "@/constants";

import Statistic from "./Statistic";

const Statistics: React.FC = () => {
  return (
    <section
      className="master-container pb-[64px] pt-10 md:pb-[72px]"
      aria-label="Statistics Section"
    >
      <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 md:gap-y-10 lg:grid-cols-5">
        {AUTO_WHEELS_STATS.map((stat) => (
          <Statistic
            key={stat.label}
            stat={stat}
            duration={stat.value >= 1000 ? 4 : 2}
          />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
