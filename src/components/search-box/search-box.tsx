import { FunctionComponent, ChangeEvent } from "react";

import "./search-box.css";

type SearchBoxProps = {
  placeholder: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBox: FunctionComponent<SearchBoxProps> = ({
  placeholder,
  handleChange,
}) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
