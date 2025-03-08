export default function List({ list, contents, handleFilterChange }) {
  return (
    <li key={list.id} className="flex center-start gap-1 justify-center nowrap">
      <input
        type="checkbox"
        id={list.id}
        checked={contents.filterData?.[list.id] || false}
        onChange={handleFilterChange}
        className="cursor-pointer"
      />
      <label htmlFor={list.id} className="cursor-pointer">
        {list.label}
      </label>
    </li>
  );
}
