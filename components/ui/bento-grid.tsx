import { cn } from "@/lib/utils";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  const Content = () => (
    <div
      className={cn(
        "row-span-1 rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-sm p-8 bg-white border border-neutral-100 justify-between flex flex-col space-y-4 h-full",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-900 mb-2 mt-4 font-serif text-xl group-hover/bento:text-gold-700 transition-colors">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 tracking-wide leading-relaxed text-sm">
          {description}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={cn("block h-full", className)}>
        <Content />
      </Link>
    );
  }

  return <Content />;
};
