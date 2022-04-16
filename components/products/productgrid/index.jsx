import React, { useState } from "react";
import { Message } from "../../message";
import { messages } from "../../../lib/messages";

export default function ProductGrid() {
  return (
    <div className="lg:px-20 md:px-6 px-4 py-12">
      { messages && (
        <h1>
          <Message
            className={'lg:text-4xl md:text-2xl text-xl font-medium lg:leading-9 md:leading-6 leading-4 text-gray-800'}
            message={messages.home_categoryTitle}
            origin={'messages.home_categoryTitle'}
          />
        </h1>
      )}
      
      { messages && (
        <p>
          <Message 
            className="text-base leading-6 mt-4 text-gray-600"
          />
        </p>
      )}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-8">
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