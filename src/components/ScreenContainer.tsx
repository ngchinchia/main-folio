import { ReactNode } from 'react';

interface ScreenContainerProps {
  title: string; // Define the type of the title prop
  children: ReactNode; 
}

export default function ScreenContainer({ title, children }: ScreenContainerProps) {
  return (
    <div className="h-screen flex flex-col text-center max-w-7xl px-10 justify-center py-20 mx-auto items-center">
    <h3 className="uppercase tracking-[20px] text-gray-500 md:text-2xl sm:text-2xl">
      {title}
    </h3>
    {children}
  </div>
  );
}
