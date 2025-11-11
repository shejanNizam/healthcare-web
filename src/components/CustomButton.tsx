export default function CustomButton({ text }: { text: string }) {
  return (
    <div>
      <button
        className="text-white font-bold bg-[#f54733] hover:bg-[#C23E2E] rounded-xl shadow-sm cursor-pointer w-fit mx-auto p-4 
                   transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-102"
      >
        {text}
      </button>
    </div>
  );
}
