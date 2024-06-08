import { DateRangePicker } from '@tremor/react';

export function DateRangePickerHero() {
  return (
   <div>
   
      <p className="pt-6 text-start font-mono text-sm text-slate-500">
        Seleccione un rango de fecha
      </p>
      <DateRangePicker className=" max-w-md" />
    </div>
  );
}