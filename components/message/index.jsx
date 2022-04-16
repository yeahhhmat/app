import { appConfig } from "../../lib/app.config"

/**
 * 
 * @param {{message:String,className:String,origin:String}} props
 * @returns JSX.Element
 */
export const Message = ({ message, className, origin }) => {
  const { debug_strings } = appConfig;
  return ( 
    <div className={debug_strings && "relative"}>
      <span className={className && className.length && className}>
        {message && message.length && message}
      </span>
      {debug_strings && origin && origin.length && (<small className="block text-rose-600 font-mono absolute">{origin}</small>)}
    </div>
  )
}