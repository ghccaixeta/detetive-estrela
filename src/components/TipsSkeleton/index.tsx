import React from "react";
import { Skeleton } from "../ui/skeleton";
import { TipsContainer } from "../TipsContainer";

export const TipsSkeleton: React.FC = () => {
  return (
    <>
      <TipsContainer title="Suspeitos">
        <div className="px-4">
          <Skeleton className="h-4 w-[50%] mb-4" />
        </div>
      </TipsContainer>

      <TipsContainer title="Locais">
        <div className="px-4">
          <Skeleton className="h-4 w-[50%] mb-4" />
        </div>
      </TipsContainer>

      <TipsContainer title="Objetos">
        <div className="px-4">
          <Skeleton className="h-4 w-[50%] mb-4" />
        </div>
      </TipsContainer>
    </>
  );
};
