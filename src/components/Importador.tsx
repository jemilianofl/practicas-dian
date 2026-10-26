import type { FormData } from '../types';

interface Props {
  data: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Importador: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="border-b-2 border-black grid grid-cols-12">
      <div className="col-span-12 bg-gray-200 border-b border-black font-bold p-1 text-sm">
        Importador
      </div>
      <div className="col-span-2 border-r border-black p-1">
        <label htmlFor="anio" className="block text-xs leading-tight">1. Año</label>
        <input id="anio" type="text" name="anio" value={data.anio} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
      <div className="col-span-4 border-r border-black p-1">
        <label htmlFor="nitImportador" className="block text-xs leading-tight">5. Número de Identificación Tributaria (NIT)</label>
        <input id="nitImportador" type="text" name="nitImportador" value={data.nitImportador} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
      <div className="col-span-6 p-1">
        <label htmlFor="nombreImportador" className="block text-xs leading-tight">11. Apellidos y nombres o razón social</label>
        <input id="nombreImportador" type="text" name="nombreImportador" value={data.nombreImportador} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
    </div>
  );
};