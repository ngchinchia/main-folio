type TitleProps = {
  className?: string;
  sectionNumber?: string;
  title?: string;
};

export default function Title({ sectionNumber, className, title }: TitleProps) {
  return (
    <h1 className={className}>
      <span className="text-[#4831d4] text-2xl">{sectionNumber}</span>
      <span className="tracking-[3px]">{title}</span>
    </h1>
  );
}
