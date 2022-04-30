import { SearchIcon } from "../../../general/icons"

export const AdminSearch = () => {
  return(
    <>
      <label
        htmlFor="app_admin-search"
        className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {'Admin Search'}
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
         <SearchIcon />
        </div>
        <input
          type="text"
          id="app_admin-search"
          name="app_admin-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search everything..."
        />
      </div>
    </>
  )
}