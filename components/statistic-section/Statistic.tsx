"use client";

import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

import { AUTO_WHEELS_STATS } from "@/constants";

type StatisticProps = React.HTMLAttributes<HTMLDivElement> & {
  stat: (typeof AUTO_WHEELS_STATS)[0];
  duration?: number; // duration for the count up animation
};

const Statistic: React.FC<StatisticProps> = ({
  stat: { label, value },
  duration = 2, // default duration is 2 seconds
  ...props
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div className="flex flex-col gap-y-2" {...props} ref={ref}>
      <span className="sr-only">{value}</span>
      <p
        className="border-l-[3px] border-l-brand pl-4 text-2xl font-bold md:text-3xl"
        aria-hidden
      >
        {isInView && <CountUp start={1} end={value} duration={duration} />}
      </p>

      <p className="pl-5 text-xs text-slate-500 md:text-sm">{label}</p>
    </div>
  );
};

export default Statistic;
