"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MotivoDesligamento } from "@/components/ui/comboboxMotivoDesligamento";
import { ComboboxOperacao } from "@/components/ui/comboboxOperaçao";
import Link from "next/link";


export default function DesligamentoPage() {



  const solicitacoesFeitas = [
    {
      nome: "TESTE DESLIGAMENTO",
      status: "Concluído",
      empresa: "AMERICAN TOWER",
    },
    {
      nome: "TESTE DESLIGAMENTO",
      status: "Concluído",
      empresa: "Pluxee",
    },
    {
      nome: "Teste 3",
      status: "Negado",
      empresa: "MCCAIN",
    },
    {
      nome: "Teste",
      status: "Concluído",
      empresa: "CHANEL",
    },
    {
      nome: "TESTE 2",
      status: "Negado",
      empresa: "HEXIS",
    },
  ];

  return (
    <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Solicitações Já feitas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Input placeholder="Digite o nome para pesquisar" className="mb-4" />
            {solicitacoesFeitas.map((solicitacao, index) => (
              <div
                key={index}
                className="p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <div className="font-medium">{solicitacao.nome}</div>
                <div className="text-sm text-gray-500">{solicitacao.status}</div>
                <div className="text-sm text-gray-500">{solicitacao.empresa}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Formulário Desligamento</CardTitle>
        </CardHeader>
        <CardContent>
        <form className="space-y-6 sm:ml-8 p-4">
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome do Funcionário</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Area</label>
            <ComboboxOperacao />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Pin</label>
              <input
                type="number"
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Data do Desligamento</label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Motivo do Desligamento</label>
            <div className="">
            <MotivoDesligamento  />

            </div>
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">Observações</label>
            <textarea
              className="w-full p-2 border rounded-md h-32"
            ></textarea>
          </div>
  
        </div>
        <div className="flex items-center justify-between">
                <Button type="submit" className="w-52 h-10 bg-blue-500 hover:bg-blue-300 !hover:bg-red-300">Salvar</Button>
                <Link href="/pageFormularios"><Button type="button" variant="outline" className="flex-1 bg-red-500 hover:bg-red-300 !hover:bg-red-300">Voltar para Formularios</Button></Link>
              </div>
      </form>
            
        </CardContent>
      </Card>
    </div>
  );
}