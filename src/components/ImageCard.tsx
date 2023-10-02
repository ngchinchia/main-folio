import React from 'react';
type cardProps = {
    title?: string
    description?: string
    imageUrl?: string
  };
export default function ImageCard({ title, imageUrl }: cardProps){
  return (
    <div className="items-center justify-center mx-auto max-w-xl lg:py-24 sm:py-10">
  <img
    src={imageUrl}
    alt={title}
    className="hidden sm:block rounded overflow-hidden shadow-sm max-w-full w-auto h-auto"
  />
</div>


  


  
  
  );
};

