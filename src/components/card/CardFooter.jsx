import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardFooter() {
  return (
    <div className="bg-[#161619] flex justify-center py-4 gap-4 text-icon-footer rounded-b-2xl">
      <FontAwesomeIcon icon={["fab", "square-twitter"]} className="w-7 h-7" />
      <FontAwesomeIcon icon={["fab", "square-facebook"]} className="w-7 h-7" />
      <FontAwesomeIcon icon={["fab", "square-instagram"]} className="w-7 h-7" />
      <FontAwesomeIcon icon={["fab", "square-github"]} className="w-7 h-7" />
    </div>
  );
}
