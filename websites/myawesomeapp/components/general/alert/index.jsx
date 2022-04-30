const InfoAlert = ({children}) => (
  <div className="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800" role="alert">
    {children}
  </div>
)

const DangerAlert = ({children}) => (
  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
    {children}
  </div>
)

const SuccessAlert = ({children}) => (
  <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
    {children}
  </div>
)

const WarningAlert = ({children}) => (
  <div className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
    {children}
  </div>
)

export const Alert = ({theme,children}) => (
  <>{   
    theme==='info' 
    ? <InfoAlert children={children}/>
    : theme==='danger' 
    ? <DangerAlert children={children}/>
    : theme==='success'
    ? <SuccessAlert children={children}/>
    : theme==='warning'
    ? <WarningAlert children={children}/>
    : <InfoAlert children={children}/>
  }</>
)