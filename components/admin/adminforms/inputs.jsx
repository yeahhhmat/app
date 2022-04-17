/**
 * 
 * @param {{generalName:String,value:String,onChange:Function:checked:Boolean,label:String}} props
 * @returns JSX.Element
 */
export const RadioInput = ({generalName, value, onChange, checked, label}) => (
  <div class="flex items-center mb-4">
    <input 
      type="radio" 
      name={generalName} 
      value={value}
      onChange={onChange} 
      checked={checked ? checked : undefined}
      className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
      aria-labelledby={value.replace(/[^A-Z0-9]+/ig, "_")}
      aria-describedby={value.replace(/[^A-Z0-9]+/ig, "_")}
    />
    <label 
      htmlFor={generalName} 
      className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {label}
    </label>
  </div>
)

export const RadioInputGroup = ({generalName, group, callback, defaultValue}) => (
  <div>
    {group && group.length && (
      group.map((item,key) => (
        <RadioInput 
          generalName={generalName}
          value={item.value}
          label={item.label}
          key={key}
          onChange={callback}
          checked={defaultValue === item.value ? true : undefined}
        />
      ))
    )}
  </div>
)