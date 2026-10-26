import type { FormData } from '../types';

interface Props {
  data: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Declarante: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="border-b-2 border-black grid grid-cols-12">
      <div className="col-span-12 bg-gray-200 border-b border-black font-bold p-1 text-sm">
        Declarante
      </div>
      <div className="col-span-3 border-r border-black p-1">
        <label htmlFor="nitDeclarante" className="block text-xs leading-tight">24. NIT</label>
        <input id="nitDeclarante" type="text" name="nitDeclarante" value={data.nitDeclarante} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
      <div className="col-span-5 border-r border-black p-1">
        <label htmlFor="razonSocialDeclarante" className="block text-xs leading-tight">26. Razón social declarante autorizado</label>
        <input id="razonSocialDeclarante" type="text" name="razonSocialDeclarante" value={data.razonSocialDeclarante} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
      <div className="col-span-2 border-r border-black p-1">
        <label htmlFor="tipoUsuario" className="block text-xs leading-tight">27. Tipo usuario</label>
        <input id="tipoUsuario" type="text" name="tipoUsuario" value={data.tipoUsuario} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
      <div className="col-span-2 p-1">
        <label htmlFor="codUsuario" className="block text-xs leading-tight">28. Cód. Usuario</label>
        <input id="codUsuario" type="text" name="codUsuario" value={data.codUsuario} onChange={onChange} className="w-full text-sm outline-none bg-transparent" />
      </div>
    </div>
  );
};