import { AD_LIST_SORTING } from "../constants"

const AdListForm = ({
  onReset,
  onSearchChange,
  onSortChange,
  search,
  sort,
}) => (
  <form className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-start sm:justify-between">
    <div className="flex flex-col w-full sm:w-1/2">
      <input
        className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        onChange={onSearchChange}
        placeholder="Search campaign..."
        type="text"
        value={search}
      />
      <button
        className="w-max text-sm text-blue-600 hover:underline"
        onClick={onReset}
        type="button"
      >
        Reset
      </button>
    </div>

    <select
      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-auto"
      onChange={onSortChange}
      value={sort}
    >
      <option value="">Sort...</option>
      <option value={AD_LIST_SORTING.SPEND_DESC}>
        Sort by Spend (High → Low)
      </option>
      <option value={AD_LIST_SORTING.SPEND_ASC}>
        Sort by Spend (Low → High)
      </option>
    </select>
  </form>
)

export default AdListForm
