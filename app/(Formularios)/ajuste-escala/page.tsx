import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ComboboxOperacao } from "@/components/ui/comboboxOperaçao";
import Link from "next/link";

export default function AjusteAtividade() {
    return (
        <div>
            <Card>
                <CardHeader className="space-y-6 sm:ml-8 p-4">
                    <CardTitle>Formulario Ajuste de Atividades</CardTitle>
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
                        <label className="block text-sm font-medium mb-1">Operação</label>
                        <ComboboxOperacao />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Horario Atual das pausas
                            </label>
                            <textarea
                                className="w-full p-2 border rounded-md h-32"
                                required
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Horario novo
                            </label>
                            <textarea
                                className="w-full p-2 border rounded-md h-32"
                                required
                            ></textarea>
                        </div>
                    </div>



                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Data de Início para alterar
                        </label>
                        <input
                            type="date"
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Justificativa da Mudança
                        </label>
                        <textarea
                            className="w-full p-2 border rounded-md h-32"
                            required
                        ></textarea>
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
