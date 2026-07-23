type ResponsivePortfolioImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  eager?: boolean;
};

function smallVariant(src: string) {
  return src.replace(/\.webp$/, "-sm.webp");
}

export function ResponsivePortfolioImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  eager = false,
}: ResponsivePortfolioImageProps) {
  const smallWidth = Math.min(width, src.includes("_") ? 480 : 640);

  return (
    <img
      src={src}
      srcSet={`${smallVariant(src)} ${smallWidth}w, ${src} ${width}w`}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      className={className}
    />
  );
}
