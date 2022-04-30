import clsx from 'clsx'; /** Combines comma separated values into valid class names */

export const ZenTextContainer = ({ children, ...rest }) => (
  <div {...rest} className={'container mx-auto'}>{children}</div>
)

export const ZenTextWrapper = ({ children, ...rest }) => (
  <div 
    {...rest} 
    className={clsx(
      // 'border border-black', /** borders */
      'fixed right-1/2 left-1/2', /** positioning */
      'flex justify-center items-center', /** center content */
      'md:max-w-96 md:w-96 w-full px-4' /** width & padding */
    )}
    style={{transform: 'translate(-50%, -50%)'}} /** positioning */
  >
    {children}
  </div>
)

