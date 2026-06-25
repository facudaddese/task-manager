interface ButtonProps {
  label: string;
  handle: () => void;
}

const Button = ({ label, handle }: ButtonProps) => {
  return (
    <button
      onClick={handle}
      className="border-2 border-blue-500 p-1 rounded-[10px] cursor-pointer hover:bg-blue-400"
    >
      {label}
    </button>
  );
};

export default Button;
