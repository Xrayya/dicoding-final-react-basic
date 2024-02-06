import { Input } from "./FormElements";

type searchBarProps = {
  onSearch: (searchStr?: string) => any;
};

function SearchBar({ onSearch }: searchBarProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value === "" ? undefined : e.target.value);
  };

  return (
    <Input
      type="text"
      className="outline-secondary mb-8 bg-slate-200"
      label="Search"
      labelClassName="text-2xl font-bold text-secondary mb-4"
      onChange={handleChange}
    />
  );
}

export default SearchBar;
