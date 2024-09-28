import { ChangeEvent } from "react";
import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterByCategory() {
  const { dispatch } = useBudget();

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "filter-category",
      payload: { id: e.target.value },
    });
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-10">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category">Filter Expenses</label>
          <select
            id="category"
            className="bg-slate-100 p-3 flex-1 rounded"
            onChange={handleSelect}
          >
            <option value="">-- All Categories</option>
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  );
}
