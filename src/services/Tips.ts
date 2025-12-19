export interface ITip {
  id: number;
  title: string;
  description?: string;
  type: "person" | "place" | "thing";
}

export const getTips = async (): Promise<ITip[]> => {
  const response = await fetch("/api/tips");
  const data: ITip[] = await response.json();
  return data;
};

export const saveTips = async (tips: ITip[]): Promise<void> => {
  if (typeof window !== "undefined") {
    localStorage.setItem("tips", JSON.stringify(tips));
  }
};

export const loadTips = (): ITip[] => {
  if (typeof window !== "undefined") {
    const savedTips = localStorage.getItem("tips");
    if (savedTips) {
      try {
        return JSON.parse(savedTips) as ITip[];
      } catch (error) {
        console.error("Erro ao carregar tips do localStorage:", error);
        return [];
      }
    }
  }
  return [];
};

export const resetTips = (): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("tips");
  }
};
