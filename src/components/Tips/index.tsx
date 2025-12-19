import { ITip, loadTips, saveTips } from "@/services/Tips";
import { Separator } from "@/components/ui/separator";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { TipsContainer } from "../TipsContainer";

interface ITipsProps {
  tips: ITip[];
  title: string;
  selectedTips: ITip[];
  setSelectedTips: (tips: ITip[]) => void;
}

export const Tips: React.FC<ITipsProps> = ({
  tips,
  title,
  selectedTips,
  setSelectedTips,
}) => {
  const handleSelectTip = (tip: ITip) => {
    const isSelect = checkIfTipIsSelected(tip);

    let newSelectTips: ITip[] = loadTips();

    if (isSelect) {
      newSelectTips = selectedTips.filter((t) => t.id !== tip.id);
      setSelectedTips(newSelectTips);
    } else {
      newSelectTips = [...selectedTips, tip];
      setSelectedTips(newSelectTips);
    }

    saveTips(newSelectTips);
  };

  const checkIfTipIsSelected = (tip: ITip) => {
    return selectedTips.some((t) => t.id === tip.id);
  };

  return (
    <TipsContainer title={title}>
      {tips.map((tip) => (
        <div className="flex flex-col px-4" key={tip.id}>
          <Button
            variant="ghost"
            className="justify-start"
            onClick={() => handleSelectTip(tip)}
          >
            <div className="flex flex-col w-full">
              <small
                className={`text-start text-sm leading-none font-medium truncate ${
                  checkIfTipIsSelected(tip) && "line-through"
                }`}
              >
                {tip.title}
              </small>
              {tip.description && (
                <p className="text-muted-foreground text-xs text-start">
                  {tip.description}
                </p>
              )}
            </div>
          </Button>
          <Separator className="mb-2 mt-2" />
        </div>
      ))}
    </TipsContainer>
  );
};
