import { FaArrowRight } from "react-icons/fa";

export default function CustomButton({ text }: { text: string }) {
  return (
    <div>
      <button className="bg-[#E7F1F8] text-primary text-md font-semibold cursor-pointer rounded-t-lg px-4 py-2 border-b-2 border-b-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out flex items-center gap-2 w-fit">
        {text} <FaArrowRight />
      </button>
    </div>
  );
}
