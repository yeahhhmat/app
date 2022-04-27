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
    className="container mx-auto flex flex-col items-center py-12 sm:py-24"
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
    {'The Freedom to Create the '}
    <span className="text-indigo-700">{'Websites '}</span>
    {'You Want'}
  </h1>
)

export const LandingPageSubtitle =({ children, ...rest }) => (
  <p {...rest} className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
    {children}
  </p>
)