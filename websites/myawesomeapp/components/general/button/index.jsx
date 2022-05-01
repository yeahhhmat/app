const InfoButton = ({children, type, ...rest}) => (
  <button 
    {...rest}
    type={type}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    {children}
  </button>
)

const AlternativeButton = ({children, type, ...rest}) => (
  <button 
    {...rest}
    type={type}
    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  >
    {children}
  </button>
)

const DangerButton = ({children, type, ...rest}) => (
  <button 
    {...rest}
    type={type}
    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
  >
    {children}
  </button>
)

const WarningButton = ({children, type, ...rest}) => (
  <button
    {...rest}
    type={type}
    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
  >
    {children}
  </button>
)

export const Button = ({theme,children,type, ...rest}) => (
  <>{   
    theme==='info' 
    ? <InfoButton type={type} {...rest}>{children}</InfoButton>
    : theme==='alternative' 
    ? <AlternativeButton {...rest}>{children}</AlternativeButton>
    : theme==='danger'
    ? <DangerButton {...rest}>{children}</DangerButton>
    : theme==='warning'
    ? <WarningButton {...rest}>{children}</WarningButton>
    : <InfoButton {...rest}>{children}</InfoButton>
  }</>
)