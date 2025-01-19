"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  UserMinus,
  Clock,
  Calendar,
  ClipboardList,
  Palmtree,
  UserPlus,
} from "lucide-react";
import Link from "next/link";

const formOptions = [
  {
    title: "Admissões",
    description: "Enviar Novas Admissões",
    icon: Users,
    href: "/admissao",
    color: "text-blue-500",
  },
  {
    title: "Desligamentos",
    description: "Enviar Desligamentos",
    icon: UserMinus,
    href: "/desligamento",
    color: "text-red-500",
  },
  {
    title: "Alteração de Horários",
    description: "Solicitar Alteração de Horario",
    icon: Clock,
    href: "/alteracaoHorarios",
    color: "text-purple-500",
  },
  {
    title: "Folgas",
    description: "Solicitar Folga",
    icon: Calendar,
    href: "/folgasForm",
    color: "text-green-500",
  },
  {
    title: "Ajuste Atividade - Escala",
    description: "Ajuste de Atividades",
    icon: ClipboardList,
    href: "/ajuste-escala",
    color: "text-orange-500",
  },
  {
    title: "Férias",
    description: "Solicitar Ferias",
    icon: Palmtree,
    href: "/ferias",
    color: "text-teal-500",
  },
  {
    title: "Solicitação de contratação",
    description: "Solicitar novas contratações",
    icon: UserPlus,
    href: "/solicitacao-contratacao",
    color: "text-indigo-500",
  },
];

export default function FormulariosPage() {
  return (
    <div className="container py-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight">Formulários Disponíveis</h1>
        <p className="mt-2 text-muted-foreground">
          Selecione um Formulario Abaixo
        </p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {formOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Link href={option.href} key={option.href}>
              <Card className="h-full transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon className={`h-6 w-6 ${option.color}`} />
                    {option.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}