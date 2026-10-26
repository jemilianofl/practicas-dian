import React from 'react';
import type { FormData } from '../types';

interface Props {
  data: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Autoliquidacion: React.FC<Props> = ({ data, onChange }) => {
  return (
    <div className="border-t-2 border-black">
      <div className="bg-gray-200 border-b border-black font-bold p-1 text-sm text-center">
        Autoliquidación
      </div>
      <div className="grid grid-cols-4 border-b border-black text-xs text-center font-bold">
        <div className="border-r border-black p-1">Concepto</div>
        <div className="border-r border-black p-1">Base</div>
        <div className="border-r border-black p-1">Total liquidado pesos ($)</div>
        <div className="p-1">Total a pagar con esta declaración pesos ($)</div>
      </div>
      
      {/* Arancel */}
      <div className="grid grid-cols-4 border-b border-black text-sm">
        <div className="border-r border-black p-1 text-xs">Arancel</div>
        <div className="border-r border-black p-1"><input type="text" className="w-full outline-none" /></div>
        <div className="border-r border-black p-1"><input type="text" className="w-full outline-none" /></div>
        <div className="p-1">
          <input type="text" name="arancelTotal" value={data.arancelTotal} onChange={onChange} className="w-full outline-none" />
        </div>
      </div>

      {/* IVA */}
      <div className="grid grid-cols-4 border-b border-black text-sm">
        <div className="border-r border-black p-1 text-xs">I.V.A.</div>
        <div className="border-r border-black p-1"><input type="text" className="w-full outline-none" /></div>
        <div className="border-r border-black p-1"><input type="text" className="w-full outline-none" /></div>
        <div className="p-1">
          <input type="text" name="ivaTotal" value={data.ivaTotal} onChange={onChange} className="w-full outline-none" />
        </div>
      </div>

      {/* Total Pago */}
      <div className="grid grid-cols-4 border-b-2 border-black text-sm bg-gray-100 font-bold">
        <div className="col-span-3 border-r border-black p-2 text-right">980. Pago total $</div>
        <div className="p-2">
          <input type="text" name="totalPagar" value={data.totalPagar} onChange={onChange} className="w-full outline-none bg-transparent" placeholder="0" />
        </div>
      </div>
    </div>
  );
};