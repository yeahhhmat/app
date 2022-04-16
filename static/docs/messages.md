# Messages
Every string on the DOM is dynamic. If the string was not created within the product cms, it was likely accessible via the admin cms. 

## <Message> - the component

### Intent 
There are several core purposes behind this component. 
1. Prevent empty strings from entering 
2. Debug mode: easily identify the origin of the string definition

**Is this WCAG compliant** I don't see why not, as long as the parent component contains the desired markup. 
```jsx
import { Message } from 'components/message'
import { messages } from 'lib/messages'

export function () {
  return (
    <div>
      { messages && (
        <h1>
          <Message
            className={'lg:text-4xl md:text-2xl text-xl font-medium lg:leading-9 md:leading-6 leading-4 text-gray-800'}
            message={messages.home_categoryTitle}
            origin={'messages.home_categoryTitle'}
          />
        </h1>
      )}
    </div>
  )
}
```