import { useState } from 'react';
import type { FormData } from '../types';

export const useFormulario = () => {
  const [formData, setFormData] = useState<FormData>({
    anio: '2025',
    nitImportador: '',
    nombreImportador: '',
    nitDeclarante: '',
    razonSocialDeclarante: '',
    nombreExportador: '',
    valorFob: '',
    valorFletes: '',
    valorSeguros: '',
    arancelTotal: '',
    ivaTotal: '',
    totalPagar: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSimularEnvio = (e: React.FormEvent<HTMLFormElement>) => { // <-- Tipo más específico
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setShowModal(false);
      setEnviado(false);
      setEmail('');
      alert("¡Práctica enviada correctamente a tu correo!");
    }, 1500);
  };

  return {
    formData,
    handleInputChange,
    showModal,
    setShowModal,
    email,
    setEmail,
    enviado,
    handleSimularEnvio
  };
};