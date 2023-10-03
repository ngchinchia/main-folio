import { ReactNode } from 'react';

interface ScreenContainerProps {
  title?: string; // Define the type of the title prop
  className?: string;
  children: ReactNode; 
}

export default function ScreenContainer({ title, className, children }: ScreenContainerProps) {
  return (
    <div className={className}>
    <h3 className="uppercase tracking-[20px] text-slate-950 md:text-2xl sm:text-2xl">
      {title}
    </h3>
    {children}
  </div>
  );
}
