export const PageWrapper = ({ children, ...rest }) => (
  <div 
    {...rest} 
    className="bg-no-repeat	bg-cover bg-center"
    style={{backgroundImage: 'url(\'./colors.jpeg\')'}}
  >
    {children}
  </div>
)

export const LandingPageWrapper = ({ children, ...rest }) => (
  <div 
    {...rest} 
    className="container mx-auto flex flex-col items-center justify-center py-12 sm:py-24"
  >
    {children}
  </div>
)

export const LandingPageTitleWrapper = ({ children, ...rest }) => (
  <div {...rest} className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
    {children}
  </div>
)

export const LandingPageTitle = ({ children, ...rest }) => (
  <h1 {...rest} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
    {children}
  </h1>
)

export const LandingPageSubtitle =({ children, ...rest }) => (
  <p {...rest} className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
    {children}
  </p>
)

export const SignInButton = ({children, ...rest}) => (  
  <a {...rest} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer">
    {children}
  </a>
)

export const Centered = ({ children, ...rest }) => (
  <div className="flex justify-center items-center">
    {children}
  </div>
)