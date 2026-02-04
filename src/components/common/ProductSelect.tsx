import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ITProductSelect } from "@/data/product";

export function ProductSelect({
  data,
  label,
}: {
  data: ITProductSelect[];
  label: string;
}) {
  return (
    <div className="relative w-full md:w-80">
      <span className="absolute -top-2 left-3 bg-white px-1 text-sm text-muted-foreground capitalize">
        {label}
      </span>

      <Select defaultValue={data[0].name}>
        <SelectTrigger className="w-full pt-6 pb-5">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {data.map((item) => (
              <SelectItem
                key={item.id}
                value={item.name}
                className="capitalize"
              >
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
