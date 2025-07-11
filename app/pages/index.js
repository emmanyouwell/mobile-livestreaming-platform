// pages/index.js or your carousel page
import fs from 'fs';
import path from 'path';
export async function getStaticProps() {
  const imageDir = path.join(process.cwd(), 'public/images/carousel');
  const filenames = fs.readdirSync(imageDir);
  const images = filenames.map((name) => `/images/carousel/${name}`);

  return { props: { images } };
}