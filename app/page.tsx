export default function Home() {
  return (
    <div className='p-6'>
      <h1 className='text-xl font-bold mb-4'>Live Screen Stream</h1>
      <iframe className="w-full h-[calc(100vh-10rem)]" src="https://lvpr.tv?v=1b5cmfnvw37ez4no" frameBorder="0" allowFullScreen allow="autoplay; encrypted-media; picture-in-picture" sandbox="allow-same-origin allow-scripts"></iframe>
    </div>
  );
}
