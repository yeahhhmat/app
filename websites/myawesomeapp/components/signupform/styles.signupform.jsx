export const TextWrapper = ({children, ...rest}) => (
  <div {...rest} className='pb-4'>{children}</div>
);

export const FormTitleText = ({children, ...rest}) => (
  <h2 {...rest} className='font-semibold text-2xl'>{children}</h2>
);

export const FormSubtitleText = ({children, ...rest}) => (
  <p {...rest} className='mt-5 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg'>{children}</p>
)