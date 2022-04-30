import { useState } from "react"
import { appConfig, useStore } from "../../../../lib/appconfig"
import { messages, notEmpty } from "../../../../lib/messages"
import { ProductForProductGrid } from "../../../products/productgrid"
import { RadioInput, RadioInputGroup } from "../inputs"

export default function AppConfig (){
  const generalName = 'productForProductGrid_textAlignment';
  const state_productForProductGrid_textAlignment = useStore((state) => state.state_productForProductGrid_textAlignment)
  const setState_productForProductGrid_textAlignment = useStore((state) => state.setState_productForProductGrid_textAlignment)
  const handleProductGridTextAlign = (ev) => setState_productForProductGrid_textAlignment(ev.target.value);

  return (
    <div className="sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5 px-4 py-6 mx-auto md:mx-0">
      <section>
        <h2 className="text-base font-semibold">
          {notEmpty(messages.admin_title_productGrid_TextAlignment)}
        </h2>
        <div className="mx-auto w-fit my-8">
          {/* just a preview product, so it's hardcoded */}
          <ProductForProductGrid 
            imgSrc={'https://images.unsplash.com/photo-1588498610686-2714130405b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'}
            imgAlt={'Blue Sky'}
            title={'Custom Packaging'}
            prePrice={'Starting at'}
            price={'$24,000,000.00'}
            adminPreviewTextAlign={state_productForProductGrid_textAlignment}
          />
        </div>
        <h2 className="mb-6">{notEmpty(messages.admin_title_productGrid_TextAlignment)}</h2>
        <RadioInputGroup 
          generalName={generalName}
          group={[
            {value: 'left',label: notEmpty(messages.admin_label_productGird_LeftTextAlignment)},
            {value: 'center',label: notEmpty(messages.admin_label_productGird_CenterTextAlignment)},
            {value: 'right',label: notEmpty(messages.admin_label_productGird_RightTextAlignment)},
          ]}
          callback={handleProductGridTextAlign}
          defaultValue={state_productForProductGrid_textAlignment}
        />
      </section>
    </div>
  )
}
