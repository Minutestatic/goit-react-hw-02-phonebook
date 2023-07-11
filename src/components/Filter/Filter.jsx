const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      type="text"
      placeholder="Пошук за ім'ям"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

export default Filter;
