import React, { useState } from "react";
import { Message } from "../../message";
import { messages, notEmpty } from "../../../lib/messages";
import Link from "next/link";
import { appConfig, useStore } from "../../../lib/appconfig";
/**
 * 
 * @param {{imgSrc:String,imgAlt:String,title:String,prePrice:String,price:String,path:String}} props
 * @returns JSX.Element
 */
export function ProductForProductGrid({
  imgSrc,
  imgAlt,
  title,
  prePrice,
  price,
  path,
  adminPreviewTextAlign
}) {
  const baseCN = (cn) => 'productForProductGrid_' + cn;
  const state_productForProductGrid_textAlignment = useStore((state) => state.state_productForProductGrid_textAlignment)
  const safeTextAlign = (appConfig.style_productForProductGrid_textAlignment) || 'left' ;

  const TheActualProduct = (
    <div id={baseCN('productCard')}>
     {notEmpty(imgSrc) && notEmpty(imgAlt) && (
        <img 
          src={notEmpty(imgSrc) && imgSrc} 
          alt={notEmpty(imgAlt) ? imgAlt : title} 
          className="w-full"
        />
      )}
      {notEmpty(title) && (
        <p id="productForProductGrid_productTitle" className="text-sm font-medium leading-none mt-3 text-gray-800">
          {title}
        </p>
      )}
      {notEmpty(price) && (
        <p className="text-xs font-medium leading-3 text-gray-600 mt-2">
          {notEmpty(prePrice) && prePrice}&nbsp;{notEmpty(price) && price}
        </p>
      )}
    </div>
  );

  return (
    <div className="lg:w-72 md:pr-8" id="app_product-for-product-grid">
      {notEmpty(path) ? <Link href={path}><a>{TheActualProduct}</a></Link> : <div>{TheActualProduct}</div>}
       <style>{`
         #productForProductGrid_productCard p {
          text-align: ${adminPreviewTextAlign || safeTextAlign};
        }
      `}</style>
    </div>
  )
}

export default function ProductGrid() {
  return (
    <div className="lg:px-20 md:px-6 px-4 py-12">
      {messages && (
        <h1>
          <Message
            className={'lg:text-4xl md:text-2xl text-xl font-medium lg:leading-9 md:leading-6 leading-4 text-gray-800'}
            message={messages.home_categoryTitle}
            origin={'messages.home_categoryTitle'}
          />
        </h1>
      )}
      
      {messages && (
        <div className="md:w-6/12">
          <p>
            <Message 
              className="text-base leading-6 mt-4 text-gray-600"
              message={messages.home_categorySubtitle}
              origin={'messages.home_categorySubtitle'}
            />
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-8">
        <ProductForProductGrid 
          imgSrc={'https://tuk-cdn.s3.amazonaws.com/can-uploader/grid-1.png'}
          imgAlt={'table image'}
          title={'Retro Lamp'}
          prePrice={'From'}
          price={'$340'}
          path={'/somewhere'}
        />
        <div className="lg:w-72 md:pr-8">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/grid-1.png" alt="table image" className="w-full" />
          <p className="text-sm font-medium leading-none mt-3 text-gray-800">Retro Lamp</p>
          <p className="text-xs font-medium leading-3 text-gray-600 mt-2">From $340</p>
        </div>
        <div className="lg:w-72 md:pr-8">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/grid-2.png" alt="table image" className="w-full" />
          <p className="text-sm font-medium leading-none mt-3 text-gray-800">Shell Collection</p>
          <p className="text-xs font-medium leading-3 text-gray-600 mt-2">From $140</p>
        </div>
        <div className="lg:w-72 md:pr-8">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/grid-3.png" alt="table image" className="w-full" />
          <p className="text-sm font-medium leading-none mt-3 text-gray-800">Elegant Pendant</p>
          <p className="text-xs font-medium leading-3 text-gray-600 mt-2">From $240</p>
        </div>
        <div className="lg:w-72 md:pr-8">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/grid-4.png" alt="table image" className="w-full" />
          <p className="text-sm font-medium leading-none mt-3 text-gray-800">Flowering Cactus</p>
          <p className="text-xs font-medium leading-3 text-gray-600 mt-2">From $90</p>
        </div>
        <div className="lg:w-72 md:pr-8">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/grid-1.png" alt="table image" className="w-full" />
          <p className="text-sm font-medium leading-none mt-3 text-gray-800">Retro Lamp</p>
          <p className="text-xs font-medium leading-3 text-gray-600 mt-2">From $340</p>
        </div>
        <div className="lg:w-72 md:pr-8">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/grid-2.png" alt="table image" className="w-full" />
          <p className="text-sm font-medium leading-none mt-3 text-gray-800">Shell Collection</p>
          <p className="text-xs font-medium leading-3 text-gray-600 mt-2">From $140</p>
        </div>
        <div className="lg:w-72 md:pr-8">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/grid-3.png" alt="table image" className="w-full" />
          <p className="text-sm font-medium leading-none mt-3 text-gray-800">Elegant Pendant</p>
          <p className="text-xs font-medium leading-3 text-gray-600 mt-2">From $240</p>
        </div>
        <div className="lg:w-72 md:pr-8">
          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/grid-4.png" alt="table image" className="w-full" />
          <p className="text-sm font-medium leading-none mt-3 text-gray-800">Flowering Cactus</p>
          <p className="text-xs font-medium leading-3 text-gray-600 mt-2">From $90</p>
        </div>
      </div>
    </div>
  );
}