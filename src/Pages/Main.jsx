import { useNavigate } from 'react-router-dom';
import ButtonMain from '../Components/ButtonMain';

export default function Main() {
  const navigate = useNavigate();

  const handleClickAbdomen = () => {
    navigate('/abdomen');
  };

  const handleClickFinger = () => {
    navigate('/finger');
  };

  return (
    <>
      <header className='mb-10'>
        <div class='flex  items-center justify-center'>
          <div class='w-max flex'>
            <h1 className='text-5xl text-cyan-600 opacity-50 font-bold mr-5'>Check</h1>
            <h1 class='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white text-5xl text-cyan-600 opacity-50 font-bold'>
              Health
            </h1>
          </div>
        </div>
      </header>
      <body className='flex w-full h-full justify-evenly'>
        <ButtonMain onClick={handleClickAbdomen} image={'/images/abdomen.png'} title={'abdomen'} />
        <ButtonMain onClick={handleClickFinger} image={'/images/finger.png'} title={'finger'} />
      </body>
    </>
  );
}
