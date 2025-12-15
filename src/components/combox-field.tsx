import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export interface ComboboxOption {
  value: string
  label: string
  icon?: string
}

interface ComboboxFieldProps {
  options: ComboboxOption[]          
  value: string                      
  onChange: (value: string) => void  
  placeholder?: string      
}

export function ComboboxField({
  options,
  value,
  onChange,
  placeholder = "Select",
}: ComboboxFieldProps) {
  const [open, setOpen] = React.useState(false)

  // displayLabel
  const displayLabel = value
    ? options.find((opt) => opt.value === value)?.label
    : placeholder

  // displayIcon
  const displayIcon = value
    ? options.find((opt) => opt.value === value)?.icon
    : undefined

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-max flex items-center gap-1 bg-gray-100 rounded-2xl"
        >
           <div className="flex items-center gap-2">
            {displayIcon && (
              <img src={displayIcon} alt={displayLabel} className="w-5 h-5 rounded-full bg-white" />
            )}
            <span>{displayLabel}</span>
          </div>
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0 mr-[-25px]">
        <Command>
          <CommandInput placeholder={`Search`} className="h-9" />
          <CommandList>
            <CommandEmpty>No {placeholder.toLowerCase()} found.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={opt.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue)
                    setOpen(false)
                  }}
                >
                  {opt.icon && (
                    <img src={opt.icon} alt="" className="w-5 h-5 rounded-full" />
                  )}
                  {opt.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === opt.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
