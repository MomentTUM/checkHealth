import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Components/Button';
import ButtonSelection from '../Components/ButtonSelection';
import ImgSelection from '../Components/ImgSelection';

export default function Abdomen() {
  const navigate = useNavigate();

  const handleClickMain = () => {
    navigate('/');
  };

  const [isHighlighted, setIsHighlighted] = useState(false);
  const [highlightedArea, setHighlightedArea] = useState(null);

  const handleClickAbdomen = (area) => {
    setIsHighlighted(!isHighlighted);
    setHighlightedArea(area);
  };

  const renderHighlightedImage = () => {
    switch (highlightedArea) {
      case 'epigastrium':
        return  <>
                  <ImgSelection image={'abdomen/epigastrium-active.png'} />
                  <ImgSelection image={'abdomen/epigastrium-highlight.png'} />
                </>
      case 'ruq':
        return  <>
                  <ImgSelection image={'abdomen/ruq-active.png'}/>
                  <ImgSelection image={'abdomen/ruq-highlight.png'}/>
                </>
      case 'luq':
        return  <>
                  <ImgSelection image={'abdomen/luq-active.png'}/>
                  <ImgSelection image={'abdomen/luq-highlight.png'}/>
                </>
      case 'umbilicus':
        return  <>
                  <ImgSelection image={'abdomen/umbilicus-active.png'}/>
                  <ImgSelection image={'abdomen/umbilicus-highlight.png'}/>
                </>
      case 'rlq':
        return  <>
                  <ImgSelection image={'abdomen/rlq-active.png'}/>
                  <ImgSelection image={'abdomen/rlq-highlight.png'}/>
                </>
      case 'llq':
        return  <>
                  <ImgSelection image={'abdomen/llq-active.png'}/>
                  <ImgSelection image={'abdomen/llq-highlight.png'}/>
                </>
      case 'suprapubic':
        return  <>
                  <ImgSelection image={'abdomen/suprapubic-active.png'}/>
                  <ImgSelection image={'abdomen/suprapubic-highlight.png'}/>
                </>
      case 'all':
        return  <>
                <ImgSelection image={'abdomen/all-over-highlight.png'}/>
                <ImgSelection image={'abdomen/epigastrium-highlight.png'}/>
                <ImgSelection image={'abdomen/llq-highlight.png'}/>
                <ImgSelection image={'abdomen/luq-highlight.png'}/>
                <ImgSelection image={'abdomen/rlq-highlight.png'}/>
                <ImgSelection image={'abdomen/ruq-highlight.png'}/>
                <ImgSelection image={'abdomen/suprapubic-highlight.png'}/>
                <ImgSelection image={'abdomen/umbilicus-highlight.png'}/>
                </>;
      default:
        return <ImgSelection image={'abdomen/default-abs.png'} />;
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
            <div className='w-32 h-40 absolute top-1/3 left-1/3'>
              <ButtonSelection w={'w-11'} h={'h-11'} top={'top-3'} left={'left-10'} onClick={() => handleClickAbdomen('epigastrium')} />
              <ButtonSelection w={'w-11'} h={'h-11'} top={'top-11'} left={'-left-1'} onClick={() => handleClickAbdomen('ruq')}/>
              <ButtonSelection w={'w-11'} h={'h-11'} top={'top-11'} left={'left-[79px]'} onClick={() => handleClickAbdomen('luq')}/>
              <ButtonSelection w={'w-10'} h={'h-10'} top={'top-[73px]'} left={'left-[39px]'} onClick={() => handleClickAbdomen('umbilicus')}/>
              <ButtonSelection w={'w-11'} h={'h-11'} top={'top-24'} left={'-left-1'} onClick={() => handleClickAbdomen('rlq')}/>
              <ButtonSelection w={'w-11'} h={'h-11'} top={'top-24'} left={'left-[79px]'} onClick={() => handleClickAbdomen('llq')}/>
              <ButtonSelection w={'w-11'} h={'h-11'} top={'top-32'} left={'left-9'} onClick={() => handleClickAbdomen('suprapubic')}/>
              <ButtonSelection w={'w-32'} h={'h-11'} top={'top-[260px]'} left={'-left-1'} onClick={() => handleClickAbdomen('all')}/>
            </div>
            {isHighlighted ? (
              <div className='relative -z-10'>
                {renderHighlightedImage()}
                <img src='abdomen/default-abs.png' alt='abd' className='w-full h-full object-contain' />
              </div>
            ) : (
              <img src='abdomen/default-abs.png' alt='abd' className='w-full h-full object-contain' />
            )}
          </div>
        </div>
      </div>
      <Button onClick={handleClickMain} title={'NEXT'} />
    </>
  );
}
