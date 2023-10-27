export default function ButtonMain(props) {
  const { onClick, image, title } = props;
  return (
    <button
      onClick={onClick}
      className='w-1/3 relative bg-gray-300 hover:bg-gradient-to-r from-[#50c6d6a8] to-[#40a5bcb0] rounded-md p-2'
    >
      <h1 className="absolute bottom-2 right-2 font-medium text-cyan-600">{title}</h1>
      <img src={image} alt={title} className='w-full h-full object-contain' />
    </button>
  );
}
