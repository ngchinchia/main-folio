import React from 'react';
type cardProps = {
    title?: string
    className?: string
    imageUrl?: string
  };
export default function ImageCard({ title, className, imageUrl }: cardProps){
  return (
    <div className={className}>
  <img
    src={imageUrl}
    alt={title}
    className="w-auto"
  />
</div>


  


  
  
  );
};

