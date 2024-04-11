import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");

  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };
  return (
    <>
      <div>
        Cari Blog :
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPost} data dari pencarian kata {search}
      </small>
    </>
  );
}

export default Search;
