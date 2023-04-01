export default function Container(props) {
  return (
    <div className={`${props.className} max-w-xs rounded-2xl`}>
      {props.children}
    </div>
  );
}
