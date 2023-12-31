import React from "react";
import styles from "./Skeleton.module.css";

const Skeleton: React.FC = () => {
  return <div className={`${styles.gradientAnimation} h-full w-full`} />;
};

export default Skeleton;
