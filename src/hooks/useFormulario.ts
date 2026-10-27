import { useState } from 'react';

export const useFormulario = () => {
  // Estado dinámico para manejar las 137+ casillas automáticamente
  const [formData, setFormData] = useState<Record<string, string>>({
    c1: '2025' // Casilla 1: Año por defecto
  });

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  // Tipado estricto solucionado para Input, Select y Textarea
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSimularEnvio = (e: React.FormEvent<HTMLFormElement>) => {
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