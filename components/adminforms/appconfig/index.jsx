import { useState } from "react"
import { appConfig, useStore } from "../../../lib/appconfig"
import { messages, notEmpty } from "../../../lib/messages"
import { ProductForProductGrid } from "../../products/productgrid"

export const InputWrapper = ({children}) => {
  return (<div className="flex border">{children}</div>)
}

export default function AppConfig (){
  const generalName = 'productForProductGrid_textAlignment';
  const setState_productForProductGrid_textAlignment = useStore((state) => state.setState_productForProductGrid_textAlignment)
  const handleProductGridTextAlign = (ev) => setState_productForProductGrid_textAlignment(ev.target.value);

  return (
    <div className="mx-auto container">
      <div className="flex items-center justify-center h-full w-full">
        <div className="bg-white border rounded-md shadow sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
          <section>
             <div className="mx-auto w-fit my-8">
              <ProductForProductGrid 
                imgSrc={'https://images.unsplash.com/photo-1588498610686-2714130405b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
                imgAlt={'Blue Sky'}
                title={'Not an NFT'}
                prePrice={'Starting at'}
                price={'$24,000,000.00'}
              />
            </div>
          </section>
          <section>
            <h2 className="">{notEmpty(messages.admin_title_productGrid_TextAlignment)}</h2>
            <InputWrapper>
              <label className="block w-24" htmlFor={generalName}>{notEmpty(messages.admin_label_productGird_LeftTextAlignment)}</label>
              <input type="radio" name={generalName} value="left" onChange={handleProductGridTextAlign} />
            </InputWrapper>

            <InputWrapper>
              <label className="block w-24" htmlFor={generalName}>{notEmpty(messages.admin_label_productGird_CenterTextAlignment)}</label>
              <input type="radio" name={generalName} value="center" onChange={handleProductGridTextAlign} />
            </InputWrapper>

            <InputWrapper>
              <label className="block w-24" htmlFor={generalName}>{notEmpty(messages.admin_label_productGird_RightTextAlignment)}</label>
              <input type="radio" name={generalName} value="right" onChange={handleProductGridTextAlign} />
            </InputWrapper>
          </section>
        </div>
      </div>
    </div>
  )
}