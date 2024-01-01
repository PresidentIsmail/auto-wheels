import React from "react";
import { cn } from "@/lib/utils";

interface VideoLoaderProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  webm?: string;
  mp4?: string;
  videoTitle: string;
  imageSrc?: string;
}

const VideoLoader: React.FC<VideoLoaderProps> = ({
  mp4,
  webm,
  videoTitle,
  imageSrc,
  className,
  ...props
}) => {
  // Check if either mp4 or webm is provided
  if (!mp4 && !webm) {
    console.error("Error: At least one of mp4 or webm should be provided.");
    throw new Error("Error: At least one of mp4 or webm should be provided.");
  }

  return (
    <video
      preload="auto"
      autoPlay
      loop
      muted
      playsInline
      title={videoTitle}
      className={cn("", className)}
      poster={imageSrc}
      {...props}
    >
      {webm && <source src={webm} type="video/webm" />}
      {mp4 && <source src={mp4} type="video/mp4" />}
    </video>
  );
};

export default VideoLoader;
