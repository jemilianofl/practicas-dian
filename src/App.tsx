import { useFormulario } from './hooks/useFormulario';
import { Importador } from './components/Importador';
import { Declarante } from './components/Declarante'; // Nuevo
import { Exportador } from './components/Exportador'; // Nuevo
import { Autoliquidacion } from './components/Autoliquidacion';
import { ModalEnvio } from './components/ModalEnvio';

function App() {
  const {
    formData,
    handleInputChange,
    showModal,
    setShowModal,
    email,
    setEmail,
    enviado,
    handleSimularEnvio
  } = useFormulario();

  return (
    <div className="min-h-screen p-4 md:p-8 font-sans text-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Simulador Formulario 500 DIAN</h1>
            <p className="text-gray-600">Módulo de práctica de Comercio Exterior</p>
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow transition-colors"
          >
            Finalizar y Enviar
          </button>
        </div>

        {/* CONTENEDOR DEL FORMULARIO TIPO DIAN */}
        <div className="bg-white border-[3px] border-black shadow-lg">
          {/* Header DIAN */}
          <div className="border-b-[3px] border-black p-4 flex justify-between items-center bg-gray-50">
            <div className="w-1/4">
              <div className="text-xs font-bold text-center">Unidad Administrativa Especial Dirección de Impuestos y Aduanas Nacionales</div>
              <div className="text-2xl font-bold text-center tracking-wider">DIAN</div>
            </div>
            <div className="w-2/4 text-center">
              <h2 className="text-xl font-bold uppercase">Declaración de Importación</h2>
              <div className="text-sm">Privada</div>
            </div>
            <div className="w-1/4 text-right">
              <div className="text-4xl font-bold">500</div>
            </div>
          </div>

          <Importador data={formData} onChange={handleInputChange} />
          
          {/* NUEVAS SECCIONES */}
          <Declarante data={formData} onChange={handleInputChange} />
          <Exportador data={formData} onChange={handleInputChange} />
          
          <Autoliquidacion data={formData} onChange={handleInputChange} />
        </div>
      </div>

      <ModalEnvio 
        isOpen={showModal}
        email={email}
        enviado={enviado}
        onClose={() => setShowModal(false)}
        onEmailChange={(e) => setEmail(e.target.value)}
        onSubmit={handleSimularEnvio}
      />
    </div>
  );
}

export default App;