import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  isOpen: boolean;
  email: string;
  enviado: boolean;
  onClose: () => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ModalEnvio: React.FC<Props> = ({ isOpen, email, enviado, onClose, onEmailChange, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-[90%]">
        <h3 className="text-lg font-bold mb-4">Enviar práctica terminada</h3>
        {!enviado ? (
          <form onSubmit={onSubmit}>
            <p className="text-sm text-gray-600 mb-4">
              Ingresa tu correo institucional para recibir una copia de tu diligenciamiento del Formulario 500.
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
                Enviar formulario
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-6">
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <p className="font-bold text-gray-800">¡Enviado con éxito!</p>
            <p className="text-sm text-gray-500 mt-2">Revisa tu bandeja de entrada.</p>
          </div>
        )}
      </div>
    </div>
  );
};