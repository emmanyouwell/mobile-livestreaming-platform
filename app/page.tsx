import Image from 'next/image';
import fs from 'fs';
import path from 'path';
export interface CarouselImage {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function Home() {
  const imageDir = path.join(process.cwd(), 'public/images');
  const filenames = fs.readdirSync(imageDir);
  const images: CarouselImage[] = filenames.map((name) => ({
    src: `/images/${name}`,
    alt: name,
  }));
  return (
    <>
      <div className='p-6'>
        <h1 className='text-xl font-bold mb-4'>Live Screen Stream</h1>
        <iframe
          className='w-full h-[calc(100vh-10rem)]'
          src='https://lvpr.tv?v=1b5cmfnvw37ez4no'
          frameBorder='0'
          allowFullScreen
          allow='autoplay; encrypted-media; picture-in-picture'
          sandbox='allow-same-origin allow-scripts'
        ></iframe>
      </div>
      <div className='p-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4'>
          {images.map((img, idx) => (
            <div
              key={idx}
              className='relative w-full h-48 rounded-lg overflow-hidden shadow'
            >
              <Image
                src={img.src}
                alt={img.alt || `Image ${idx}`}
                fill
                className='object-cover'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
