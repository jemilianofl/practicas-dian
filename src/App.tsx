import { useFormulario } from './hooks/useFormulario';
import { ModalEnvio } from './components/ModalEnvio';

// 1. SACAMOS EL COMPONENTE FUERA DE APP Y AGREGAMOS IDS PARA ACCESIBILIDAD Y SOMBREADO INTERACTIVO
const InputForm = ({ name, className = "", value, onChange }: { name: string, className?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <input 
    id={name}
    type="text" 
    name={name} 
    value={value} 
    onChange={onChange} 
    className={`w-full outline-none text-xs font-mono text-blue-800 transition-all duration-200 bg-blue-50/50 shadow-inner focus:bg-transparent focus:shadow-none ${className}`} 
  />
);

function App() {
  const { formData, handleInputChange, showModal, setShowModal, email, setEmail, enviado, handleSimularEnvio } = useFormulario();

  return (
    <div className="min-h-screen bg-gray-200 p-2 md:p-4 font-sans text-black flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-4">
        <div className="flex justify-end">
          <button onClick={() => setShowModal(true)} className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded shadow">
            Finalizar y Enviar Práctica
          </button>
        </div>

        {/* CONTENEDOR PRINCIPAL DEL FORMULARIO - BORDE GRUESO */}
        <div className="bg-white border-4 border-black p-1 shadow-2xl relative">
          
          {/* HEADER */}
          <div className="flex border-b-2 border-black pb-1 mb-1">
            <div className="w-1/4 flex flex-col items-center justify-center border-r-2 border-black pr-2">
              <span className="text-[10px] font-bold text-center leading-tight">Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales</span>
              <h1 className="text-4xl font-black tracking-tighter mt-1">DIAN</h1>
            </div>
            <div className="w-2/4 flex flex-col items-center justify-center px-2">
              <h2 className="text-xl font-bold uppercase tracking-widest text-center">Declaración de Importación</h2>
              <h3 className="text-sm font-bold mt-1">Privada</h3>
            </div>
            <div className="w-1/4 flex flex-col justify-between items-end pl-2 border-l-2 border-black">
              <div className="text-6xl font-black">500</div>
              <div className="flex w-full mt-2 gap-2">
                <div className="w-1/2 border border-black p-0.5">
                  <label htmlFor="c1" className="text-[9px] leading-none block">1. Año</label>
                  <InputForm name="c1" value={formData.c1 || ''} onChange={handleInputChange} />
                </div>
                <div className="w-1/2 border border-black p-0.5">
                  <label htmlFor="c4" className="text-[9px] leading-none block">4. Número de formulario</label>
                  <InputForm name="c4" value={formData.c4 || ''} onChange={handleInputChange} />
                </div>
              </div>
            </div>
          </div>

          {/* SECCIÓN IMPORTADOR */}
          <div className="border border-black flex text-[9px] leading-tight mb-1 bg-gray-50">
            <div className="w-8 border-r border-black flex items-center justify-center font-bold text-[10px]">
              <span className="-rotate-90 whitespace-nowrap">Importador</span>
            </div>
            <div className="flex-1 grid grid-cols-12">
              <div className="col-span-3 border-r border-b border-black p-0.5"><label htmlFor="c5">5. Número de Identificación Tributaria (NIT)</label><InputForm name="c5" value={formData.c5 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c6">6. DV</label><InputForm name="c6" value={formData.c6 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-6 border-r border-b border-black p-0.5"><label htmlFor="c11">11. Apellidos y nombres o razón social</label><InputForm name="c11" value={formData.c11 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-b border-black p-0.5"><label htmlFor="c12">12. Cód. Dirección seccional</label><InputForm name="c12" value={formData.c12 || ''} onChange={handleInputChange} /></div>
              
              <div className="col-span-6 border-r border-black p-0.5"><label htmlFor="c13">13. Dirección</label><InputForm name="c13" value={formData.c13 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black p-0.5"><label htmlFor="c15">15. Teléfono</label><InputForm name="c15" value={formData.c15 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black p-0.5"><label htmlFor="c16">16. Cód. Dpto.</label><InputForm name="c16" value={formData.c16 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-black p-0.5"><label htmlFor="c17">17. Cód. Ciudad/Municipio</label><InputForm name="c17" value={formData.c17 || ''} onChange={handleInputChange} /></div>
            </div>
          </div>

          {/* SECCIÓN DECLARANTE */}
          <div className="border border-black flex text-[9px] leading-tight mb-1 bg-gray-50">
            <div className="w-8 border-r border-black flex items-center justify-center font-bold text-[10px]">
              <span className="-rotate-90 whitespace-nowrap">Declarante</span>
            </div>
            <div className="flex-1 grid grid-cols-12">
              <div className="col-span-3 border-r border-b border-black p-0.5"><label htmlFor="c24">24. Número de Identificación Tributaria (NIT)</label><InputForm name="c24" value={formData.c24 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c25">25. DV</label><InputForm name="c25" value={formData.c25 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-5 border-r border-b border-black p-0.5"><label htmlFor="c26">26. Razón social del declarante autorizado</label><InputForm name="c26" value={formData.c26 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c27">27. Tipo usuario</label><InputForm name="c27" value={formData.c27 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-b border-black p-0.5"><label htmlFor="c28">28. Cód. Usuario</label><InputForm name="c28" value={formData.c28 || ''} onChange={handleInputChange} /></div>
              
              <div className="col-span-4 border-r border-black p-0.5"><label htmlFor="c29">29. Número documento de identificación</label><InputForm name="c29" value={formData.c29 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-8 border-black p-0.5"><label htmlFor="c30">30. Apellidos y nombres</label><InputForm name="c30" value={formData.c30 || ''} onChange={handleInputChange} /></div>
            </div>
          </div>

          {/* DECLARACIÓN / LLEGADA / EXPORTADOR */}
          <div className="border-t border-l border-r border-black grid grid-cols-12 text-[9px] leading-tight">
             {/* Fila 31-39 */}
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c31">31. Clase import.</label><InputForm name="c31" value={formData.c31 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c32">32. Tipo declaración</label><InputForm name="c32" value={formData.c32 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c33">33. Cód.</label><InputForm name="c33" value={formData.c33 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c34">34. No. Form. anterior</label><InputForm name="c34" value={formData.c34 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c35">35. Fecha (A-M-D)</label><InputForm name="c35" value={formData.c35 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c36">36. Cód. Dir.</label><InputForm name="c36" value={formData.c36 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c37">37. Dec. Export. No.</label><InputForm name="c37" value={formData.c37 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-b border-black p-0.5"><label htmlFor="c38">38. Fecha</label><InputForm name="c38" value={formData.c38 || ''} onChange={handleInputChange} /></div>

             {/* Fila 40-45 */}
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c40">40. Cód. Lugar ingr.</label><InputForm name="c40" value={formData.c40 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c41">41. Cód. Depósito</label><InputForm name="c41" value={formData.c41 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-3 border-r border-b border-black p-0.5"><label htmlFor="c42">42. Manifiesto carga</label><InputForm name="c42" value={formData.c42 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c43">43. F. Llegada</label><InputForm name="c43" value={formData.c43 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-3 border-r border-b border-black p-0.5"><label htmlFor="c44">44. Doc. transporte</label><InputForm name="c44" value={formData.c44 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-b border-black p-0.5"><label htmlFor="c45">45. Fecha</label><InputForm name="c45" value={formData.c45 || ''} onChange={handleInputChange} /></div>

             {/* Fila 46-52 */}
             <div className="col-span-5 border-r border-b border-black p-0.5"><label htmlFor="c46">46. Nombre exportador o proveedor exterior</label><InputForm name="c46" value={formData.c46 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-3 border-r border-b border-black p-0.5"><label htmlFor="c47">47. Ciudad</label><InputForm name="c47" value={formData.c47 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c48">48. Cód. País</label><InputForm name="c48" value={formData.c48 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-3 border-b border-black p-0.5"><label htmlFor="c49">49. Dirección exportador</label><InputForm name="c49" value={formData.c49 || ''} onChange={handleInputChange} /></div>
             
             <div className="col-span-6 border-r border-b border-black p-0.5"><label htmlFor="c50">50. E-mail</label><InputForm name="c50" value={formData.c50 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-3 border-r border-b border-black p-0.5"><label htmlFor="c51">51. No. de factura</label><InputForm name="c51" value={formData.c51 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-3 border-b border-black p-0.5"><label htmlFor="c52">52. Fecha factura</label><InputForm name="c52" value={formData.c52 || ''} onChange={handleInputChange} /></div>
          </div>

          {/* DETALLE MERCANCÍAS Y VALORES (53 - 90) */}
          <div className="border-l border-r border-black grid grid-cols-12 text-[9px] leading-tight">
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c53">53. C. País Proc.</label><InputForm name="c53" value={formData.c53 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c54">54. Mod. trans</label><InputForm name="c54" value={formData.c54 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c55">55. C. bandera</label><InputForm name="c55" value={formData.c55 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c56">56. C. destino</label><InputForm name="c56" value={formData.c56 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-4 border-r border-b border-black p-0.5"><label htmlFor="c57">57. Empresa transportadora</label><InputForm name="c57" value={formData.c57 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c58">58. Tasa de cambio $</label><InputForm name="c58" value={formData.c58 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-b border-black p-0.5"><label htmlFor="c59">59. Subpartida arancelaria</label><InputForm name="c59" value={formData.c59 || ''} onChange={handleInputChange} /></div>

             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c60">60. C. Comp.</label><InputForm name="c60" value={formData.c60 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c61">61. C. Supl.</label><InputForm name="c61" value={formData.c61 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c62">62. C. Mod.</label><InputForm name="c62" value={formData.c62 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c63">63. Cuotas</label><InputForm name="c63" value={formData.c63 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c64">64. Valor cuota USD</label><InputForm name="c64" value={formData.c64 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c65">65. Periodicidad cuota</label><InputForm name="c65" value={formData.c65 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c66">66. C. País orig.</label><InputForm name="c66" value={formData.c66 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c67">67. C. Acuerdo</label><InputForm name="c67" value={formData.c67 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-b border-black p-0.5"><label htmlFor="c68">68. Forma de pago</label><InputForm name="c68" value={formData.c68 || ''} onChange={handleInputChange} /></div>

             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c69">69. T. import.</label><InputForm name="c69" value={formData.c69 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c70">70. C. País compra</label><InputForm name="c70" value={formData.c70 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c71">71. Peso bruto kg</label><InputForm name="c71" value={formData.c71 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c72">72. Peso neto kg</label><InputForm name="c72" value={formData.c72 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c73">73. C. embal.</label><InputForm name="c73" value={formData.c73 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c74">74. Bultos</label><InputForm name="c74" value={formData.c74 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c75">75. Subpart.</label><InputForm name="c75" value={formData.c75 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c76">76. Cód. Unidad física</label><InputForm name="c76" value={formData.c76 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-3 border-b border-black p-0.5"><label htmlFor="c77">77. Cantidad</label><InputForm name="c77" value={formData.c77 || ''} onChange={handleInputChange} /></div>

             {/* Fila Valores USD */}
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c78">78. Valor FOB USD</label><InputForm name="c78" value={formData.c78 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c79">79. Valor fletes USD</label><InputForm name="c79" value={formData.c79 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c80">80. Valor seguros USD</label><InputForm name="c80" value={formData.c80 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c81">81. Valor otros gastos</label><InputForm name="c81" value={formData.c81 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c82">82. Sum fletes/seg/otros</label><InputForm name="c82" value={formData.c82 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c83">83. Ajuste val.</label><InputForm name="c83" value={formData.c83 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-b border-black p-0.5"><label htmlFor="c84">84. Valor aduana</label><InputForm name="c84" value={formData.c84 || ''} onChange={handleInputChange} /></div>

             {/* Fila Registros */}
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c85">85. Cód. Reg/licencia</label><InputForm name="c85" value={formData.c85 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c86">86. Número</label><InputForm name="c86" value={formData.c86 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c87">87. Cód. Oficina</label><InputForm name="c87" value={formData.c87 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-1 border-r border-b border-black p-0.5"><label htmlFor="c88">88. Año</label><InputForm name="c88" value={formData.c88 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-2 border-r border-b border-black p-0.5"><label htmlFor="c89">89. Programa No.</label><InputForm name="c89" value={formData.c89 || ''} onChange={handleInputChange} /></div>
             <div className="col-span-3 border-b border-black p-0.5"><label htmlFor="c90">90. Cód. Interno producto</label><InputForm name="c90" value={formData.c90 || ''} onChange={handleInputChange} /></div>
          </div>

          {/* DESCRIPCIÓN */}
          <div className="border-l border-r border-b border-black p-1 h-24 flex flex-col bg-white">
            <label htmlFor="c91" className="text-[9px] font-bold">91. Descripción de las mercancías (No inicie la descripción con lo señalado en el arancel. Incluya marcas, seriales y otros)</label>
            <textarea 
              id="c91" 
              name="c91" 
              value={formData.c91 || ''} 
              onChange={handleInputChange} 
              className="w-full flex-1 outline-none resize-none text-[10px] font-mono text-blue-800 transition-all duration-200 bg-blue-50/50 shadow-inner focus:bg-transparent focus:shadow-none"
            ></textarea>
          </div>

          {/* AUTOLIQUIDACIÓN (MATRIZ) */}
          <div className="border border-black mt-1 bg-gray-50 flex flex-col text-[9px]">
            <div className="text-center font-bold border-b border-black py-0.5 bg-gray-200">Autoliquidación</div>
            <div className="grid grid-cols-12 text-center font-bold border-b border-black">
              <div className="col-span-3 border-r border-black p-0.5 flex items-center justify-center">Concepto</div>
              <div className="col-span-1 border-r border-black p-0.5 flex items-center justify-center">%</div>
              <div className="col-span-2 border-r border-black p-0.5 flex items-center justify-center">Base</div>
              <div className="col-span-2 border-r border-black p-0.5 flex items-center justify-center">Total liquidado pesos ($)</div>
              <div className="col-span-2 border-r border-black p-0.5 flex items-center justify-center">Total a pagar pesos ($)</div>
              <div className="col-span-2 p-0.5 flex items-center justify-center leading-tight">Total liquidado dólares (USD)</div>
            </div>

            {/* Arancel */}
            <div className="grid grid-cols-12 border-b border-black">
              <div className="col-span-3 border-r border-black p-0.5 flex items-center">Arancel</div>
              <div className="col-span-1 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">92</span><InputForm name="c92" value={formData.c92 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">93</span><InputForm name="c93" value={formData.c93 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">94</span><InputForm name="c94" value={formData.c94 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">95</span><InputForm name="c95" value={formData.c95 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">96</span><InputForm name="c96" value={formData.c96 || ''} onChange={handleInputChange} /></div>
            </div>
            {/* IVA */}
            <div className="grid grid-cols-12 border-b border-black">
              <div className="col-span-3 border-r border-black p-0.5 flex items-center">I.V.A.</div>
              <div className="col-span-1 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">97</span><InputForm name="c97" value={formData.c97 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">98</span><InputForm name="c98" value={formData.c98 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">99</span><InputForm name="c99" value={formData.c99 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">100</span><InputForm name="c100" value={formData.c100 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">101</span><InputForm name="c101" value={formData.c101 || ''} onChange={handleInputChange} /></div>
            </div>
            {/* Salvaguardia */}
            <div className="grid grid-cols-12 border-b border-black">
              <div className="col-span-3 border-r border-black p-0.5 flex items-center">Salvaguardia</div>
              <div className="col-span-1 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">102</span><InputForm name="c102" value={formData.c102 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">103</span><InputForm name="c103" value={formData.c103 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">104</span><InputForm name="c104" value={formData.c104 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">105</span><InputForm name="c105" value={formData.c105 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">106</span><InputForm name="c106" value={formData.c106 || ''} onChange={handleInputChange} /></div>
            </div>
            {/* Compensatorios */}
            <div className="grid grid-cols-12 border-b border-black">
              <div className="col-span-3 border-r border-black p-0.5 flex items-center text-[8px] leading-tight">Derechos compensatorios</div>
              <div className="col-span-1 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">107</span><InputForm name="c107" value={formData.c107 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">108</span><InputForm name="c108" value={formData.c108 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">109</span><InputForm name="c109" value={formData.c109 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">110</span><InputForm name="c110" value={formData.c110 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">111</span><InputForm name="c111" value={formData.c111 || ''} onChange={handleInputChange} /></div>
            </div>
            {/* Antidumping */}
            <div className="grid grid-cols-12 border-b border-black">
              <div className="col-span-3 border-r border-black p-0.5 flex items-center text-[8px]">Derechos antidumping</div>
              <div className="col-span-1 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">112</span><InputForm name="c112" value={formData.c112 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">113</span><InputForm name="c113" value={formData.c113 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">114</span><InputForm name="c114" value={formData.c114 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">115</span><InputForm name="c115" value={formData.c115 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">116</span><InputForm name="c116" value={formData.c116 || ''} onChange={handleInputChange} /></div>
            </div>
            {/* Sanción */}
            <div className="grid grid-cols-12 border-b border-black">
              <div className="col-span-3 border-r border-black p-0.5 flex items-center">Sanción</div>
              <div className="col-span-1 border-r border-black bg-gray-200"></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">117</span><InputForm name="c117" value={formData.c117 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">118</span><InputForm name="c118" value={formData.c118 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">119</span><InputForm name="c119" value={formData.c119 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 flex bg-gray-200"><span className="p-0.5 w-4 text-[7px] text-gray-500">120</span></div>
            </div>
            {/* Rescate */}
            <div className="grid grid-cols-12 border-b border-black">
              <div className="col-span-3 border-r border-black p-0.5 flex items-center">Rescate</div>
              <div className="col-span-1 border-r border-black bg-gray-200"></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">121</span><InputForm name="c121" value={formData.c121 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">122</span><InputForm name="c122" value={formData.c122 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">123</span><InputForm name="c123" value={formData.c123 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 flex bg-gray-200"><span className="p-0.5 w-4 text-[7px] text-gray-500">124</span></div>
            </div>
            {/* Totales */}
            <div className="grid grid-cols-12">
              <div className="col-span-6 border-r border-black p-0.5 text-right font-bold pr-4">Total</div>
              <div className="col-span-2 border-r border-black flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">125</span><InputForm name="c125" value={formData.c125 || ''} onChange={handleInputChange} /></div>
              <div className="col-span-2 border-r border-black bg-gray-200"></div>
              <div className="col-span-2 flex"><span className="p-0.5 w-4 text-[7px] text-gray-500">126</span><InputForm name="c126" value={formData.c126 || ''} onChange={handleInputChange} /></div>
            </div>
          </div>

          {/* PAGOS ANTERIORES Y ESPACIOS RESERVADOS (127 - 135) */}
          <div className="border border-black mt-1 grid grid-cols-12 text-[9px] leading-tight bg-gray-50">
            <div className="col-span-4 border-r border-black p-0.5">
              <label htmlFor="c127">127. Valor pagos anteriores</label>
              <InputForm name="c127" value={formData.c127 || ''} onChange={handleInputChange} />
            </div>
            <div className="col-span-4 border-r border-black p-0.5">
              <label htmlFor="c128">128. Recibo oficial de pago anterior No.</label>
              <InputForm name="c128" value={formData.c128 || ''} onChange={handleInputChange} />
            </div>
            <div className="col-span-4 p-0.5">
              <label htmlFor="c129">129. Fecha</label>
              <InputForm name="c129" value={formData.c129 || ''} onChange={handleInputChange} />
            </div>
          </div>

          <div className="border border-t-0 border-black flex h-10 text-[9px] bg-gray-50">
            <div className="w-1/2 border-r border-black p-0.5">
              <span className="font-bold">130. Espacio reservado DIAN-Actuación aduanera</span>
            </div>
            <div className="w-1/2 p-0.5">
              <span className="font-bold">131. Espacio reservado uso exclusivo Ministerio de Relaciones Exteriores</span>
            </div>
          </div>

          <div className="border border-t-0 border-black grid grid-cols-12 text-[9px] leading-tight bg-gray-50">
            <div className="col-span-4 border-r border-black p-0.5">
              <label htmlFor="c132">132. No. Aceptación declaración</label>
              <InputForm name="c132" value={formData.c132 || ''} onChange={handleInputChange} />
            </div>
            <div className="col-span-2 border-r border-black p-0.5">
              <label htmlFor="c133">133. Fecha</label>
              <InputForm name="c133" value={formData.c133 || ''} onChange={handleInputChange} />
            </div>
            <div className="col-span-4 border-r border-black p-0.5">
              <label htmlFor="c134">134. Levante No.</label>
              <InputForm name="c134" value={formData.c134 || ''} onChange={handleInputChange} />
            </div>
            <div className="col-span-2 p-0.5">
              <label htmlFor="c135">135. Fecha</label>
              <InputForm name="c135" value={formData.c135 || ''} onChange={handleInputChange} />
            </div>
          </div>

          {/* FIRMAS Y PIE DE PÁGINA */}
          <div className="flex border border-black mt-1 text-[9px] bg-white h-24">
            {/* Firma Funcionario */}
            <div className="w-3/12 flex flex-col border-r border-black relative">
              <div className="p-1 font-bold">Firma funcionario responsable</div>
              <div className="absolute bottom-6 left-1 w-[90%] border-t border-black pt-0.5">136. Nombre</div>
              <div className="absolute bottom-1 left-1 w-[90%] border-t border-black pt-0.5">137. C.C. No.</div>
            </div>
            
            {/* Firma Declarante */}
            <div className="w-3/12 p-1 border-r border-black relative">
              <span className="font-bold">Firma declarante</span>
            </div>

            {/* Espacio sello y Pago Total */}
            <div className="w-4/12 flex flex-col border-r border-black relative">
              <div className="p-1 text-[8px] italic flex-1 border-b border-black text-center text-gray-500">
                997. Espacio exclusivo para el sello<br/>de la entidad recaudadora
              </div>
              <div className="p-1 flex items-center justify-between h-8 bg-gray-50">
                <label htmlFor="c980" className="font-bold text-[12px] whitespace-nowrap mr-2">980. Pago total $</label>
                <div className="w-1/2 border-b border-black">
                  <InputForm name="c980" value={formData.c980 || ''} onChange={handleInputChange} className="text-right text-sm font-bold" />
                </div>
              </div>
            </div>

            {/* Espacio Adhesivo */}
            <div className="w-2/12 p-1 flex flex-col items-center text-[7px] text-center italic text-gray-500 relative bg-gray-100">
              <span className="text-xl font-bold font-serif opacity-30 absolute top-2">NO</span>
              <span className="font-bold mb-1">DILIGENCIABLE</span>
              <span>996. Espacio para el adhesivo de la entidad recaudadora<br/>(Número del adhesivo)</span>
              <span className="absolute bottom-1 w-[90%] pt-1 border-t border-gray-400">Coloque el timbre de la máquina registradora al dorso de este formulario</span>
            </div>
          </div>

        </div>
      </div>

      <ModalEnvio 
        isOpen={showModal} email={email} enviado={enviado}
        onClose={() => setShowModal(false)} onEmailChange={(e) => setEmail(e.target.value)} onSubmit={handleSimularEnvio}
      />
    </div>
  );
}

export default App;