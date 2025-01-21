"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { MotivoDesligamento } from "@/components/ui/comboboxMotivoDesligamento";
import { ComboboxOperacao } from "@/components/ui/comboboxOperaçao";
import Link from "next/link";

export default function DesligamentoPage() {
  return (
    <div>
      <Card className="">
        <CardHeader className="space-y-6 sm:ml-8 p-4">
          <CardTitle>Formulário Desligamento</CardTitle>
        </CardHeader>
      </Card>
      <form className="space-y-6 sm:ml-8 p-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nome do Funcionário
            </label>
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
              <input type="number" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Data do Desligamento
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Motivo do Desligamento
            </label>
            <div className="">
              <MotivoDesligamento />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Observações
            </label>
            <textarea className="w-full p-2 border rounded-md h-32"></textarea>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button
            type="submit"
            className="w-52 h-10 bg-blue-500 hover:bg-blue-300 !hover:bg-red-300"
          >
            Salvar
          </Button>
          <Link href="/pageFormularios">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-red-500 hover:bg-red-300 !hover:bg-red-300"
            >
              Voltar para Formularios
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
