"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

import { useViewportSize } from "@/hooks/use-viewport-size";
import { heroMedia } from "@/constants";

interface VideoLoaderProps
  extends React.VideoHTMLAttributes<HTMLVideoElement> {}

const VideoLoader: React.FC<VideoLoaderProps> = ({ className, ...props }) => {
  const { width } = useViewportSize();
  const isMobile = width < 1024;

  const [isClient, setIsClient] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or return a placeholder/loading state
  }

  const mp4Source = isMobile ? heroMedia.mp4.mobile : heroMedia.mp4.desktop;
  const webmSource = isMobile ? heroMedia.webm.mobile : heroMedia.webm.desktop;
  const poster = isMobile ? heroMedia.poster.mobile : heroMedia.poster.desktop;

  return (
    <>
      {!isVideoLoaded && (
        <Image
          src={poster}
          alt="Video poster"
          placeholder="blur"
          priority
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      )}

      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        title="Promo video"
        className={`${className} ${isVideoLoaded ? "" : "hidden"}`}
        onLoadedData={() => setIsVideoLoaded(true)}
        {...props}
      >
        <source src={webmSource} type="video/webm" />
        <source src={mp4Source} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoLoader;
