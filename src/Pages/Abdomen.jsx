import React, { useState } from 'react';
import Button from '../Components/Button';
import ButtonSelection from '../Components/ButtonSelection';
import ImgSelection from '../Components/ImgSelection';

export default function Abdomen() {
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleClickAbdomen = () => {
    setIsHighlighted(true);
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
              <ButtonSelection w={'w-11'} top={'top-3'} left={'left-10'}/>
              <ButtonSelection w={'w-11'} top={'top-11'} left={'-left-1'}/>
              <ButtonSelection w={'w-11'} top={'top-11'} left={'left-[79px]'}/>
              <ButtonSelection w={'w-11'} top={'top-[72px]'} left={'left-[38px]'}/>
              <ButtonSelection w={'w-11'} top={'top-24'} left={'-left-1'}/>
              <ButtonSelection w={'w-11'} top={'top-24'} left={'left-[79px]'}/>
              <ButtonSelection w={'w-11'} top={'top-32'} left={'left-9'}/>
              <ButtonSelection w={'w-11'} top={'top-[150px]'} left={'-left-[90px]'}/>
              <ButtonSelection w={'w-11'} top={'top-[150px]'} left={'left-[185px]'}/>
              <ButtonSelection w={'w-32'} top={'top-[260px]'} left={'-left-1'} onClick={handleClickAbdomen}/>
            </div>
            {isHighlighted ? (
              <div className='relative -z-10'>
                <ImgSelection image={'abdomen/all-over-highlight.png'}/>
                <ImgSelection image={'abdomen/epigastrium-highlight.png'}/>
                <ImgSelection image={'abdomen/llq-highlight.png'}/>
                <ImgSelection image={'abdomen/luq-highlight.png'}/>
                <ImgSelection image={'abdomen/rlq-highlight.png'}/>
                <ImgSelection image={'abdomen/ruq-highlight.png'}/>
                <ImgSelection image={'abdomen/suprapubic-highlight.png'}/>
                <ImgSelection image={'abdomen/umbilicus-highlight.png'}/>
                <img src='abdomen/default-abs.png' alt='abd' className='w-full h-full object-contain' />
              </div>
              ) : (
                <img src='abdomen/default-abs.png' alt='abd' className='w-full h-full object-contain' />
              )}
          </div>
        </div>
      </div>
      <Button onClick={()=>{}} title={'NEXT'} />
    </>
  );
}
