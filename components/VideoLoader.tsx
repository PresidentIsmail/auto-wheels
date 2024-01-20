"use client";

import React from "react";
4;
import Image from "next/image";

import { useViewportSize } from "@/hooks/use-viewport-size";
import { heroMedia } from "@/constants";

interface VideoLoaderProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {}

const VideoLoader: React.FC<VideoLoaderProps> = ({ className, ...props }) => {
  const { width } = useViewportSize();
  const isMobile = width < 1024;

  const mp4Source = isMobile ? heroMedia.mp4.mobile : heroMedia.mp4.desktop;
  const webmSource = isMobile ? heroMedia.webm.mobile : heroMedia.webm.desktop;
  const poster = isMobile
    ? heroMedia.poster.mobile.src
    : heroMedia.poster.desktop.src;

  return (
    <>
      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        title="Promo video"
        poster={poster}
        className={className}
        {...props}
      >
        <source src={webmSource} type="video/webm" />
        <source src={mp4Source} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoLoader;
