export default function ButtonSelection(props) {
  const { w, h, top, left, onClick } = props;
  return (
    <>
      <button onClick={onClick} className={`${w} ${h} absolute rounded-full ${top} ${left}`} />
    </>
  );
}
