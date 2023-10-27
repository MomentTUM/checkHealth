import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <div className='h-screen flex relative items-center justify-center z-0 bg-[#F1F1F1] space-x-8 overflow-hidden'>
        <div className='m-auto w-[80%] max-w-4xl max-h-4xl p-10 overflow-hidden rounded-2xl backdrop-blur-md bg-white/40 text-center shadow-[10px_15px_20px_5px_#00000035]'>
          <Outlet />
        </div>
        <img
          src='images/BG.jpg'
          alt='BgLayout'
          className='w-full h-full -left-8 absolute aspect-auto object-cover -z-10'
        />
      </div>
    </>
  );
}
