import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ComboboxCoordenador } from "@/components/ui/combobox-Coordenador";
import { ComboboxGestor } from "@/components/ui/combobox-Gestor";
import { ComboboxSupervisor } from "@/components/ui/combobox-supervisor";
import { ComboboxOperacao } from "@/components/ui/comboboxOperaçao";
import Link from "next/link";

export default function AdmissaoForm() {
  return (
    <div>
      <Card>
        <CardHeader className="space-y-6 sm:ml-8 p-4">
          <CardTitle>Formulario Admissões</CardTitle>
        </CardHeader>
      </Card>
      <form className="space-y-6 sm:ml-8 p-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">CPF</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Data de Nascimento
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Cargo</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="flex flex-row px-4 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Area</label>
            <ComboboxOperacao />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Gestor</label>
            <ComboboxGestor />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Coordenador</label>
            <ComboboxCoordenador />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Supervisor</label>
            <ComboboxSupervisor />
          </div>

          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Pin</label>
            <input
              type="number"
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Data de Início
            </label>
            <input
              type="date"
              className="w-full p-2 border rounded-md"
              required
            />
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
        </div>
      </form>
    </div>
  );
}
