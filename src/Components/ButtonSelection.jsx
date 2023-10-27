export default function ButtonSelection(props) {
  const { w, top, left, onClick } = props;
  return (
    <>
      <button onClick={onClick} className={`${w} h-11 absolute rounded-full ${top} ${left}`}></button>
    </>
  );
}
