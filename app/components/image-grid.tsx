import React from "react";
import Image from "next/image";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
    caption?: string;
  }[];
  columns?: 2 | 3 | 4; // Accepts 2, 3, or 4 columns
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
}) => {
  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  const isUnsupportedFormat = (src: string) => {
    const lowerSrc = src.toLowerCase();
    return lowerSrc.endsWith('.jfif') || lowerSrc.endsWith('.heic');
  };

  return (
    <section>
      <div className={`grid ${gridClass} gap-4 my-8`}>
        {images.map((image, index) => {
          const useRegularImg = isUnsupportedFormat(image.src);
          
          return (
            <div key={index} className="space-y-2">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                {image.href ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={image.href}
                    className="block w-full h-full"
                  >
                    {useRegularImg ? (
                      <img
                        alt={image.alt}
                        src={image.src}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <Image
                        alt={image.alt}
                        src={image.src}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        priority
                        className="rounded-lg object-cover"
                      />
                    )}
                  </a>
                ) : (
                  useRegularImg ? (
                    <img
                      alt={image.alt}
                      src={image.src}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <Image
                      alt={image.alt}
                      src={image.src}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      priority
                      className="rounded-lg object-cover"
                    />
                  )
                )}
              </div>
              {image.caption && (
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  {image.caption}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
