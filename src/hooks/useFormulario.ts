import { useState } from 'react';
import { RESPUESTAS_ESPERADAS } from '../data/respuestas';

export const useFormulario = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
    c1: '2025' // Casilla 1: Año por defecto
  });

  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);
  
  // NUEVO: Estados para la evaluación
  const [errores, setErrores] = useState<string[]>([]);
  const [nota, setNota] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Si el usuario corrige un campo erróneo, le quitamos el borde rojo inmediatamente
    if (errores.includes(name)) {
      setErrores(prev => prev.filter(err => err !== name));
    }
  };

  // NUEVO: Motor de Evaluación
  const procesarEvaluacion = (modo: 'APRENDIZAJE' | 'EXAMEN') => {
    const nuevosErrores: string[] = [];
    let aciertos = 0;
    const totalCamposClave = Object.keys(RESPUESTAS_ESPERADAS).length;

    Object.entries(RESPUESTAS_ESPERADAS).forEach(([campo, respuestaCorrecta]) => {
      const valorUsuario = (formData[campo] || '').trim().toUpperCase();
      if (valorUsuario !== respuestaCorrecta.toUpperCase()) {
        nuevosErrores.push(campo);
      } else {
        aciertos++;
      }
    });

    if (modo === 'APRENDIZAJE') {
      setErrores(nuevosErrores);
      if (nuevosErrores.length === 0) {
        alert("¡Excelente! Todos los campos clave están correctos.");
      } else {
        alert(`Modo Aprendizaje: Tienes ${nuevosErrores.length} campos incorrectos o vacíos. Revisa las casillas marcadas en rojo.`);
      }
    } else if (modo === 'EXAMEN') {
      // En modo examen no mostramos retroalimentación visual (sin errores rojos)
      setErrores([]); 
      const notaFinal = (aciertos / totalCamposClave) * 5.0;
      setNota(notaFinal);
      setShowModal(true); // Abre el modal para entregar la prueba
    }
  };

  const handleSimularEnvio = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => {
      setShowModal(false);
      setEnviado(false);
      setEmail('');
      setNota(null);
    }, 3000);
  };

  return {
    formData,
    handleInputChange,
    showModal,
    setShowModal,
    email,
    setEmail,
    enviado,
    handleSimularEnvio,
    procesarEvaluacion,
    errores,
    nota
  };
};