import { DashboardIcon, LogoutIcon, NotificationIcon, ProductIcon, UserIcon, WebsiteEditorIcon } from "../../general/icons"

export const AdminNavItem = ({icon, navItemName, onClick, count}) => {
  return (
    <button 
      onClick={onClick} 
      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full inline"
    >
      {icon && icon}
      {navItemName && navItemName.length && (
        <span className="ml-3">{navItemName}</span>        
      )}
      {count && (
        <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
          {count}
        </span>
      )}
    </button>
  )
}

export const AdminNavItemGroup = ({group, onClick}) => {
  return (
    <ul className="space-y-2">
      {group && group.length && (
        group.map((item,key) => (
          <li>
            <AdminNavItem 
              icon={item.icon}
              navItemName={item.navItemName}
              count={item.count ? item.count : undefined}
              onClick={onClick}
              key={key}
            />
          </li>
        ))
      )}
    </ul>
  )
}

export default function AdminSideNav() {
  return (
    <aside className="" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
        <div className="p-2">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{'Admin Dashboard'}</span>
        </div>
        <AdminNavItemGroup 
          group={[
            {icon: <DashboardIcon />,navItemName: 'Dashboard'},
            {icon: <NotificationIcon />,navItemName: 'Notifications', count: 3},
            {icon: <UserIcon />,navItemName: 'Users'},
            {icon: <ProductIcon />,navItemName: 'Products'},
            {icon: <WebsiteEditorIcon />,navItemName: 'Website Editor'},
            {icon: <LogoutIcon  />,navItemName: 'Sign Out'},
          ]}
        />
  
        <div id="dropdown-cta" className="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
          <div className="flex items-center mb-3">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
              Beta
            </span>
            <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
              <span className="sr-only">Close</span>
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
            Preview the new Flowbite dashboard navigation! You can turn the new
            navigation off for a limited time in your profile.
          </p>
          <a
            className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            href="#"
          >
            Turn new navigation off
          </a>
        </div>
      </div>
    </aside>

  )
}