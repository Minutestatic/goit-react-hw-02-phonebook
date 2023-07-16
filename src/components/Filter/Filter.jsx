import css from './Filter.module.css';
const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      className={css['filter-input']}
      type="text"
      placeholder="Search by name"
      value={filter}
      onChange={onFilterChange}
    />
  );
};

export default Filter;
