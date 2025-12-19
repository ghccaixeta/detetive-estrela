"use client";

import { Alert } from "@/components/Alert";
import { getTips, ITip, loadTips, resetTips } from "@/services/Tips";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Tips } from "@/components/Tips";
import { TipsSkeleton } from "@/components/TipsSkeleton";

export default function Home() {
  const [tips, setTips] = useState<ITip[]>([]);
  const [selectedTips, setSelectedTips] = useState<ITip[]>([]);

  const init = async () => {
    await fetchTips();
    loadSelectedTips();
  };

  const fetchTips = async () => {
    const tips = await getTips();

    setTips(tips);
  };

  const loadSelectedTips = () => {
    const savedTips = loadTips();
    setSelectedTips(savedTips);
  };

  const handleResetTips = () => {
    resetTips();
    init();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col py-8 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/faixa.png"
          alt="Game logo"
          width={800}
          height={200}
          priority
        />

        <div className="flex w-full justify-end">
          <Alert
            title="Você tem certeza?"
            description="Essa ação irá reiniciar o jogo e limpar todas as pistas."
            buttonText="Novo Jogo"
            onConfirm={handleResetTips}
          />
        </div>

        <Card className="w-full mt-4">
          <CardHeader>
            <CardTitle>Investigação</CardTitle>
            <CardDescription className="">
              Pressione as pistas que você já descobriu e continue investigando.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {tips && tips.length > 0 ? (
              <>
                <Tips
                  tips={tips.filter((tip) => tip.type === "person")}
                  title="Suspeitos"
                  selectedTips={selectedTips}
                  setSelectedTips={setSelectedTips}
                />
                <Tips
                  tips={tips.filter((tip) => tip.type === "place")}
                  title="Locais"
                  selectedTips={selectedTips}
                  setSelectedTips={setSelectedTips}
                />
                <Tips
                  tips={tips.filter((tip) => tip.type === "thing")}
                  title="Objetos"
                  selectedTips={selectedTips}
                  setSelectedTips={setSelectedTips}
                />
              </>
            ) : (
              <TipsSkeleton />
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
