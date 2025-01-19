"use client";

import { ArrowRight, BarChart2, Users, FileSpreadsheet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Ferramenta do Planejamento
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Gerencie solicitações de admissão e desligamento de forma eficiente e organizada.
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/pageFormularios">
                <Button className="bg-primary">
                  Iniciar Solicitação
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="h-full transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Gestão de Pessoas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gerencie processos de admissão e desligamento de forma eficiente.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="h-6 w-6" />
                  Análise de Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Acompanhe métricas e indicadores importantes para o planejamento.
                </p>
              </CardContent>
            </Card>
            <Card className="h-full transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="h-6 w-6" />
                  Relatórios
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gere relatórios detalhados para tomada de decisões.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}