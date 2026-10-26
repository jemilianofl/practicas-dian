import type { FormData } from '../types';

interface Props {
  data: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Exportador: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="border-b-2 border-black grid grid-cols-12">
      <div className="col-span-12 bg-gray-200 border-b border-black font-bold p-1 text-sm">
        Exportador o proveedor en el exterior
      </div>
      <div className="col-span-6 border-r border-b border-black p-1">
        <label htmlFor="nombreExportador" className="block text-xs leading-tight">46. Nombre exportador o proveedor</label>
        <input id="nombreExportador" type="text" name="nombreExportador" value={data.nombreExportador} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
      <div className="col-span-3 border-r border-b border-black p-1">
        <label htmlFor="ciudadExportador" className="block text-xs leading-tight">47. Ciudad</label>
        <input id="ciudadExportador" type="text" name="ciudadExportador" value={data.ciudadExportador} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
      <div className="col-span-3 border-b border-black p-1">
        <label htmlFor="paisExportador" className="block text-xs leading-tight">48. Cód. País</label>
        <input id="paisExportador" type="text" name="paisExportador" value={data.paisExportador} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
    </div>
  );
};