export default function ImgSelection(props) {
  const { image } = props;
  return <img src={image} alt='abd' className='absolute w-full h-full object-contain' />;
}
