import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../base/Button";

export default function CardBody() {
  return (
    <div className="bg-body-card py-6 font-inter text-white">
      <div className="title text-center">
        <h1 className="text-lg ">Laura Smith</h1>
        <h3 className="text-sm text-text-1">Frontend Developer</h3>
        <h4 className="text-xs p-4 text-text-2">laurasmith.website</h4>
      </div>
      <div className="button flex justify-center gap-4">
        <Button className="w-[115px] flex justify-center items-center gap-2 text-text-button">
          <FontAwesomeIcon icon={["fas", "envelope"]} />
          Email
        </Button>
        <Button className="w-[115px] flex justify-center items-center gap-2 bg-blue-600 text-white">
          <FontAwesomeIcon icon={["fab", "linkedin"]} className="" />
          LinkedIn
        </Button>
      </div>
      <div className="content pt-6 px-9 mt-4">
        <h2 className="text-base">About</h2>
        <p className="text-xs text-text-2 mb-4">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>

        <h2 className="text-base">Interests</h2>
        <p className="text-xs text-text-2">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </div>
  );
}
