import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import ButtonSelection from '../Components/ButtonSelection';
import ImgSelection from '../Components/ImgSelection';

export default function Finger() {
  const navigate = useNavigate();

  const handleClickMain = () => {
    navigate('/');
  };

  const [isHighlighted, setIsHighlighted] = useState(false);
  const [highlightedArea, setHighlightedArea] = useState(null);

  const handleClickFinger = (area) => {
    setIsHighlighted(!isHighlighted);
    setHighlightedArea(area);
  };

  const renderHighlightedImage = () => {
    switch (highlightedArea) {
      case 'dip':
        return  <>
                  <ImgSelection image={'finger/dip-active.png'} />
                  <ImgSelection image={'finger/dip-highlight.png'} />
                </>
      case 'mcp':
        return  <>
                  <ImgSelection image={'finger/mcp-active.png'}/>
                  <ImgSelection image={'finger/mcp-highlight.png'}/>
                </>
      case 'pip':
        return  <>
                  <ImgSelection image={'finger/pip-active.png'}/>
                  <ImgSelection image={'finger/pip-highlight.png'}/>
                </>
      case 'all':
        return <ImgSelection image={'finger/others-highlight.png'}/>
      default:
        return <ImgSelection image={'finger/default-finger.png'} />;
    }
  };

  return (
    <>
      <div className='w-full flex justify-center'>
        <div className='w-1/2 h-full'>
          <h1 className='w-full text-2xl text-cyan-600 opacity-50 font-bold mr-5'>
            Which area of the stomach hurts the most
          </h1>
          <div className='relative w-[408px] h-[481px]'>
            <div className='w-60 h-56 absolute top-[50px] left-[90px]'>
              <ButtonSelection w={'w-6'} h={'h-5'} top={'top-16'} left={'-left-1'} onClick={() => handleClickFinger('dip')} />
              <ButtonSelection w={'w-6'} h={'h-5'} top={'top-3'} left={'left-11'} onClick={() => handleClickFinger('dip')} />
              <ButtonSelection w={'w-6'} h={'h-4'} top={'-top-2'} left={'left-[85px]'} onClick={() => handleClickFinger('dip')} />
              <ButtonSelection w={'w-6'} h={'h-4'} top={'top-1'} left={'left-[135px]'} onClick={() => handleClickFinger('dip')} />
              <ButtonSelection w={'w-6'} h={'h-5'} top={'top-[100px]'} left={'left-2'} onClick={() => handleClickFinger('pip')} />
              <ButtonSelection w={'w-6'} h={'h-5'} top={'top-[62px]'} left={'left-[48px]'} onClick={() => handleClickFinger('pip')} />
              <ButtonSelection w={'w-6'} h={'h-4'} top={'top-12'} left={'left-[92px]'} onClick={() => handleClickFinger('pip')} />
              <ButtonSelection w={'w-6'} h={'h-4'} top={'top-14'} left={'left-[137px]'} onClick={() => handleClickFinger('pip')} />
              <ButtonSelection w={'w-6'} h={'h-6'} top={'top-36'} left={'left-[220px]'} onClick={() => handleClickFinger('pip')} />
              <ButtonSelection w={'w-8'} h={'h-6'} top={'top-[145px]'} left={'left-6'} onClick={() => handleClickFinger('mcp')} />
              <ButtonSelection w={'w-8'} h={'h-6'} top={'top-[128px]'} left={'left-[55px]'} onClick={() => handleClickFinger('mcp')} />
              <ButtonSelection w={'w-8'} h={'h-6'} top={'top-[120px]'} left={'left-[92px]'} onClick={() => handleClickFinger('mcp')} />
              <ButtonSelection w={'w-8'} h={'h-6'} top={'top-[120px]'} left={'left-[130px]'} onClick={() => handleClickFinger('mcp')} />
              <ButtonSelection w={'w-8'} h={'h-6'} top={'top-[202px]'} left={'left-[185px]'} onClick={() => handleClickFinger('mcp')} />
              <ButtonSelection w={'w-72'} h={'h-11'} top={'top-[380px]'} left={'-left-9'} onClick={() => handleClickFinger('all')}/>
            </div>
            {isHighlighted ? (
              <div className='relative -z-10'>
                {renderHighlightedImage()}
                <img src='finger/default-finger.png' alt='abd' className='w-full h-full object-contain' />
              </div>
            ) : (
              <img src='finger/default-finger.png' alt='abd' className='w-full h-full object-contain' />
            )}
          </div>
        </div>
      </div>
      <Button onClick={handleClickMain} title={'NEXT'} />
    </>
  );
}
