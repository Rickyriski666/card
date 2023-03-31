export default function CardImage(props) {
  return (
    <div>
      <img className="w-80 h-80" src={props.src} alt="" />
    </div>
  );
}
