import React from "react";

import { AUTO_WHEELS_STATS } from "@/constants";

const Statistics: React.FC = () => {
  return (
    <section className="master-container pt-10">
      <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 md:gap-y-10 lg:grid-cols-5">
        {AUTO_WHEELS_STATS.map((stat) => (
          <Statistic key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
};

type StatisticProps = React.HTMLAttributes<HTMLDivElement> & {
  stat: (typeof AUTO_WHEELS_STATS)[0];
};

const Statistic: React.FC<StatisticProps> = ({
  stat: { label, value },
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-2" {...props}>
      <h3 className="border-l-[3px] border-l-brand pl-4 text-2xl font-bold md:text-3xl">
        {" "}
        {value}
      </h3>

      <p className="pl-5 text-xs text-[#92959a] md:text-sm">{label}</p>
    </div>
  );
};

export default Statistics;
