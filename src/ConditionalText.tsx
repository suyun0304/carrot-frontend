import { ChangeEvent, useState } from "react";

const ConditionalText = () => {
  const [name, setName] = useState<string>("");

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={updateName}></input>
      <article>이름: {name.length > 5 && name}</article>
    </>
  );
};

export default ConditionalText;
