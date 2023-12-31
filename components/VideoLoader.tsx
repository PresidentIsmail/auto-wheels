import React, { memo } from "react";
import { cn } from "@/lib/utils";

interface VideoLoaderProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  webm?: string;
  mp4: string;
  videoTitle: string;
  imageSrc?: string;
}

const VideoLoader: React.FC<VideoLoaderProps> = memo(
  ({ mp4, webm, videoTitle, imageSrc, className, ...props }) => {
    return (
      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        title={videoTitle}
        className={cn(
          "",
          className,
        )}
        poster={imageSrc}
        {...props}
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={mp4} type="video/mp4" />
      </video>
    );
  },
);

VideoLoader.displayName = "VideoLoader";

export default VideoLoader;
