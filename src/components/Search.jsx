
import { useNavigate } from "react-router-dom";

function Search({ search, setSearch }) {
  const navigate = useNavigate();

  return (
    <input
      type="text"
      className="form-control form-control-sm me-2"
      placeholder="Search..."
      value={search}
      onChange={(e) => {
        const value = e.target.value;
        setSearch(value);

        if (value.length >= 3) {
          navigate(`/shop?search=${value}`);
        }
      }}
      style={{ width: "300px" }}
    />
  );
}

export default Search;