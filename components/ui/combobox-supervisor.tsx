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

const Supervisores = [
    {
      value: "alex-souza-silva",
      label: "Alex Souza Silva",
    },
    {
      value: "lais-santos-moura",
      label: "Lais Santos Moura",
    },
    {
      value: "rian-quirino",
      label: "Rian Quirino",
    },
    {
      value: "nicoly-karoline-muniz-ribeiro",
      label: "Nicoly Karoline Muniz Ribeiro",
    },
    {
      value: "yuri-donato-de-matos",
      label: "Yuri Donato de Matos",
    },
    {
      value: "rachel-oliveira",
      label: "Rachel Oliveira",
    },
    {
      value: "natalia-pigozzi-de-oliveira",
      label: "Natalia Pigozzi de Oliveira",
    },
    {
      value: "serge-santos",
      label: "Serge Santos",
    },
    {
      value: "leidiane-jose",
      label: "Leidiane Jose",
    },
    {
      value: "adelia-pereira",
      label: "Adelia Pereira",
    },
    {
      value: "rosana-oliveira",
      label: "Rosana Oliveira",
    },
    {
      value: "larissa-renata-de-oliveira-pigozzi",
      label: "Larissa Renata de Oliveira Pigozzi",
    },
  ];

export function ComboboxSupervisor() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" w-[210px] justify-between"
        >
          {value
            ? Supervisores.find((Supervisores) => Supervisores.value === value)?.label
            : "Selecione um Supervisor"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Pesquise um Supervisor" />
          <CommandList>
            <CommandEmpty>Supervisor não encontrado</CommandEmpty>
            <CommandGroup>
              {Supervisores.map((Supervisores) => (
                <CommandItem
                  key={Supervisores.value}
                  value={Supervisores.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === Supervisores.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {Supervisores.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
