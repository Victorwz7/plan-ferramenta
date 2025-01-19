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

const Gestor = [
  {
    value: "Daniel Moura da Silva",
    label: "Daniel Moura da Silva",
  },
  {
    value: "Henrique Belloni",
    label: "Henrique Belloni",
  },
  {
    value: "Heitor Rodrigues de Oliveira",
    label: "Heitor Rodrigues de Oliveira",
  },
];


export function ComboboxGestor() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[210px] justify-between"
        >
          {value
            ? Gestor.find((Gestor) => Gestor.value === value)?.label
            : "Selecione um Gestor"}
          <ChevronsUpDown className="-ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Pesquise um Gestor" />
          <CommandList>
            <CommandEmpty>Gestor não encontrado</CommandEmpty>
            <CommandGroup>
              {Gestor.map((Gestor) => (
                <CommandItem
                  key={Gestor.value}
                  value={Gestor.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === Gestor.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {Gestor.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
