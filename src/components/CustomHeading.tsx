import { ReactNode } from "react";

export default function CustomHeading({ text }: { text: string | ReactNode }) {
  return (
    <div>
      <h2 className="text-center text-primary text-2xl md:text-3xl lg:text-4xl font-extrabold mt-20 my-8 pt-8 max-w-[80%] mx-auto">
        {text}
      </h2>
    </div>
  );
}
