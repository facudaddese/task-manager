import { useState } from "react";

export const useInput = () => {
  const [input, setInput] = useState<string>("");

  const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(target.value);
  };

  return { input, handleInput, setInput };
};
