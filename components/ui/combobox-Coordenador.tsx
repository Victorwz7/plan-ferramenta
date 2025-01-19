"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Coordenador = [
  {
    value: "elaine-dousseau",
    label: "Elaine Dousseau",
  },
  {
    value: "lilian-santos",
    label: "Lilian Santos",
  },
  {
    value: "regiane",
    label: "Regiane",
  },
  {
    value: "cristiane-galdino",
    label: "Cristiane Galdino",
  },
  {
    value: "fernando-silva",
    label: "Fernando Silva",
  },
  {
    value: "larissa-pigozzi",
    label: "Larissa Pigozzi",
  },
  {
    value: "ricarine-rabelo",
    label: "Ricarine Rabelo",
  },
  {
    value: "silvio-togawa",
    label: "Silvio Togawa",
  },
  {
    value: "audrey-ferreira",
    label: "Audrey Ferreira",
  },
  {
    value: "jessica-caldeira",
    label: "Jessica Caldeira",
  },
  {
    value: "leandro-belange",
    label: "Leandro Belange",
  },
];


export function ComboboxCoordenador() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[220px] justify-between"
        >
          {value
            ? Coordenador.find((Coordenador) => Coordenador.value === value)?.label
            : "Selecione um Coordenador"}
          <ChevronsUpDown className="ml-1 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Pesquise um Coordenador" />
          <CommandList>
            <CommandEmpty>Coordenador não encontrado</CommandEmpty>
            <CommandGroup>
              {Coordenador.map((Coordenador) => (
                <CommandItem
                  key={Coordenador.value}
                  value={Coordenador.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === Coordenador.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {Coordenador.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
