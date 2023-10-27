import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <>
    <div className='h-screen flex relative items-center justify-center z-0 bg-[#F1F1F1] space-x-8 overflow-hidden'>
      <div className='mx-auto w-[80%] max-w-4xl h-[80%] overflow-hidden rounded-2xl bg-[#F1F1F1] p-7 text-center shadow-[10px_15px_20px_5px_#00000035]'>
        <h1>Hello</h1>
        <Outlet />
      </div>
    </div>
    </>
  )
}
