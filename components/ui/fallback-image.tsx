"use client";

import Image from "next/image";
import { useState } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallbackColor?: string;
  fallbackText?: string;
  priority?: boolean;
}

export function FallbackImage({
  src,
  alt,
  width,
  height,
  className = "",
  fallbackColor = "#FFF0E6",
  fallbackText,
  priority = false,
}: FallbackImageProps) {
  const [error, setError] = useState(false);
  const textToShow = fallbackText || alt;
  const fontSize = Math.min(width, height) / 20; // Ajusta o tamanho da fonte proporcionalmente

  const fallbackSrc = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}' fill='none'%3E%3Crect width='${width}' height='${height}' fill='${fallbackColor.replace(
    "#",
    "%23"
  )}'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='${fontSize}' fill='%23F97316'%3E${textToShow}%3C/text%3E%3C/svg%3E`;

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setError(true)}
      priority={priority}
    />
  );
} 