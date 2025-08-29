interface TText {
  text: string;
}

export default function CustomErrorPage({ text }: TText) {
  return (
    <div className="text-center">
      <p className="font-semibold"> {text} </p>
    </div>
  );
}
