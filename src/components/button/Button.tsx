interface ButtonProps {
  label: string;
  handle: () => void;
}

const Button = ({ label, handle }: ButtonProps) => {
  return (
    <button
      onClick={handle}
      className={`${label === "Add task" ? "border-2 border-blue-500 p-1 rounded-[10px] cursor-pointer hover:bg-blue-400" : label === "Edit task" ? "border-2 border-green-500 p-1 rounded-[10px] cursor-pointer hover:bg-green-400" : "border-2 border-red-500 p-1 rounded-[10px] cursor-pointer hover:bg-red-400"} font-medium`}
    >
      {label}
    </button>
  );
};

export default Button;
