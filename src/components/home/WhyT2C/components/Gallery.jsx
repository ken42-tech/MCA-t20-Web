import React from 'react';
import Image from 'next/image';

const layoutConfig = [
  [1, 3, 1, 2],
  [1, 3, 3],
];

const Gallery = ({ items }) => {
  let currentIndex = 0;

  return (
    <div className="w-full h-[100vh] flex flex-col gap-3 p-3">
      {layoutConfig.map((row, rowIndex) => (
        <div key={rowIndex} className="h-[49%] w-full">
          <div className="grid w-full h-full grid-cols-7 gap-4">
            {row.map((span, colIndex) => {
              const item = items[currentIndex];
              currentIndex++;

              if (!item) return null;

              return (
                <div
                  key={colIndex}
                  className={`relative col-span-${span} overflow-hidden bg-white/30`}
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-2">
                    <p className="text-sm font-semibold">{item.title}</p>
                    {item.date && (
                      <p className="text-xs text-gray-300">{item.date}</p>
                    )}
                  </div>

                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="/images/home/whyT2C/vidLogo.svg"
                        width={100}
                        height={100}
                        className="w-16 h-16"
                        alt='img'
                      />
                    </div>
                  )}

                  {item.views && item.type === 'image' && (
                    <div className="absolute top-2 right-2">
                      <Image
                        src="/images/home/whyT2C/imgIcon.svg"
                        width={100}
                        height={100}
                        alt='img'
                        className="w-8 h-8"
                      />
                    </div>
                  )}
                  {item.type === 'coming-soon' && (
                    <div className="absolute top-0 left-0 bg-white text-black text-xs px-2 py-1 rounded font-semibold">
                      COMING SOON
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
