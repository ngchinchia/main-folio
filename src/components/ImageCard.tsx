import React from 'react';
type cardProps = {
    title?: string
    description?: string
    imageUrl?: string
  };
export default function ImageCard({ title, imageUrl }: cardProps){
  return (
    <div className="mx-auto max-w-xl lg:py-24 sm:py-10 sm:w-full">
  <img
    src={imageUrl}
    alt={title}
    className="w-full hidden sm:block "
  />
</div>


  


  
  
  );
};

