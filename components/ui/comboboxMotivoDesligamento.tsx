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

const Motivo = [
  {
    value: "Voluntario",
    label: "Voluntario",
  },
  {
    value: "Involuntario",
    label: "Involuntario",
  },
];


export function MotivoDesligamento() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? Motivo.find((Motivo) => Motivo.value === value)?.label
            : "Selecione um Motivo"}
          <ChevronsUpDown className="-ml-1 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Pesquise um Motivo" />
          <CommandList>
            <CommandEmpty>Motivo não encontrado</CommandEmpty>
            <CommandGroup>
              {Motivo.map((Motivo) => (
                <CommandItem
                  key={Motivo.value}
                  value={Motivo.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === Motivo.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {Motivo.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
