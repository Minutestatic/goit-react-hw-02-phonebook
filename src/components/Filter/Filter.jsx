const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

export default Filter;
