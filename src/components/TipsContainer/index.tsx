import React from "react";

interface ITipsContainerProps {
  children: React.ReactNode;
  title: string;
}

export const TipsContainer: React.FC<ITipsContainerProps> = ({
  children,
  title,
}) => {
  return (
    <div className="flex flex-col mb-4 border border-neutral-200 rounded-xl">
      <h4 className="text-md font-semibold w-full text-center bg-neutral-50 rounded-t-xl py-2 mb-2">
        {title}
      </h4>
      {children}
    </div>
  );
};
