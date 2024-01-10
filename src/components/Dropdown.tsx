import React from "react";

type DropdownProps = {
  options: string[];
  value: string;
  setValue: (value: string) => void;
};

const Dropdown = ({ options, value, setValue }: DropdownProps) => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">
        {value.length ? value : "Select State"}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {options?.map((item, index) => (
          <li key={index}>
            <a onClick={() => setValue(item)}>{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
