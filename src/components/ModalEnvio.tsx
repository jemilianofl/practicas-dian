import React from 'react';

interface Props {
  isOpen: boolean;
  email: string;
  enviado: boolean;
  nota: number | null; // NUEVO
  onClose: () => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ModalEnvio: React.FC<Props> = ({ isOpen, email, enviado, nota, onClose, onEmailChange, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-[90%]">
        <h3 className="text-lg font-bold mb-4">Entregar Evaluación</h3>
        {!enviado ? (
          <form onSubmit={onSubmit}>
            <p className="text-sm text-gray-600 mb-4">
              Ingresa tu correo institucional para enviar tus resultados al docente.
            </p>
            <input
              type="email"
              required
              value={email}
              onChange={onEmailChange}
              placeholder="estudiante@universidad.edu.co"
              className="w-full border border-gray-300 rounded p-2 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
                Cancelar
              </button>
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Enviar resultados
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
              ✓
            </div>
            <p className="font-bold text-gray-800 text-lg">¡Evaluación Entregada!</p>
            {nota !== null && (
              <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                <p className="text-sm text-gray-500">Tu calificación final es:</p>
                <p className={`text-3xl font-black ${nota >= 3.0 ? 'text-green-600' : 'text-red-600'}`}>
                  {nota.toFixed(1)} <span className="text-sm font-normal text-gray-500">/ 5.0</span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};