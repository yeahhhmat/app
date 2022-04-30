export const TextWrapper = ({children, ...rest}) => (
  <div {...rest} className='pb-4'>
    {children}
  </div>
);

export const FormTitleText = ({children, ...rest}) => (
  <h2 {...rest} className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10'>
    {children}
  </h2>
);

export const FormSubtitleText = ({children, ...rest}) => (
  <p {...rest} className='mt-5 text-gray-400 font-normal text-center text-sm sm:text-lg'>
    {children}
  </p>
)

export const FormSubmitButton = ({children, ...rest}) => (
  <button {...rest} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-pointer'>
    {children}
  </button>
)

export const FormAltButton = ({children, ...rest}) => (
  <a {...rest} className='py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
    {children}
  </a>
)

export const ItemsCentered = ({ children, ...rest }) => (
  <div {...rest} className="flex items-center">
    {children}
  </div>
)

export const InputLabelWrapper = ({ children, ...rest }) => (
  <label className='flex flex-col mb-6'>
    {children}
  </label>
)

export const InputLabel = ({ children, ...rest }) => (
  <span className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
    {children}
  </span>
)

export const FormWrapper = ({children, ...rest}) => (
  <form {...rest} className='flex flex-col'>{children}</form>
)

export const Input = ({...rest}) => (
  <input {...rest} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
)

export const ErrorMessage = ({children,...rest}) => (
  <p {...rest} className="mt-2 text-sm text-red-600 dark:text-red-500">{children}</p>
)

export const SectionWrapper = ({children, ...rest}) =>(
  <section {...rest}>{children}</section>
)