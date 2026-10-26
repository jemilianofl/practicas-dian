export interface FormData {
  // Importador
  anio: string;
  nitImportador: string;
  nombreImportador: string;
  
  // Declarante
  nitDeclarante: string;
  razonSocialDeclarante: string;
  tipoUsuario: string;
  codUsuario: string;
  
  // Exportador
  nombreExportador: string;
  ciudadExportador: string;
  paisExportador: string;
  emailExportador: string;
  
  // Mercancía y Transporte
  tasaCambio: string;
  subpartida: string;
  pesoBruto: string;
  valorFob: string;
  valorFletes: string;
  valorSeguros: string;
  valorAduana: string;
  
  // Autoliquidación
  arancelTotal: string;
  ivaTotal: string;
  sancionTotal: string;
  totalPagar: string;
}