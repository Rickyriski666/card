export default function Button(props) {
  return (
    <div className="flex">
      <button className={`${props.className} py-2 px-4 rounded-lg text-black`}>
        {props.children}
      </button>
    </div>
  );
}
