"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import { useViewportSize } from "@/hooks/use-viewport-size";

interface VideoLoaderProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  videoSources: {
    mp4: {
      mobile: string;
      desktop: string;
    };
    webm: {
      mobile: string;
      desktop: string;
    };
  };
  posterSources: {
    mobile: StaticImageData;
    desktop: StaticImageData;
  };
  videoTitle: string;
  imageSizes: string; // new prop for image sizes
}

const VideoLoader: React.FC<VideoLoaderProps> = ({
  className,
  videoSources,
  posterSources,
  videoTitle,
  imageSizes = "(max-width: 1024px) 100vw, 50vw",
  ...props
}) => {
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

  const mp4Source = isMobile
    ? videoSources.mp4.mobile
    : videoSources.mp4.desktop;
  const webmSource = isMobile
    ? videoSources.webm.mobile
    : videoSources.webm.desktop;
  const poster = isMobile ? posterSources.mobile : posterSources.desktop;

  return (
    <>
      {!isVideoLoaded && (
        <Image
          src={poster}
          alt="Video poster"
          placeholder="blur"
          priority
          fill
          sizes={imageSizes}
          className={`${className}`}
        />
      )}

      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        title={videoTitle}
        poster={poster.src}
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
