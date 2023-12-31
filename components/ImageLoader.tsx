"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import Skeleton from "./skeleton/Skeleton";

interface ImageLoaderProps
  extends React.ComponentPropsWithoutRef<typeof Image> {
  src: StaticImageData;
  alt: string;
}

const ImageLoader = ({ src, alt, ...props }: ImageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };


  return (
    <>
      {isLoading && <Skeleton />}

      {src && (
        <Image
          src={src} // use fallback image if main image fails to load
          alt={alt || "image"}
          onLoad={handleImageLoad}
          {...props}
        />
      )}
    </>
  );
};

export default ImageLoader;
