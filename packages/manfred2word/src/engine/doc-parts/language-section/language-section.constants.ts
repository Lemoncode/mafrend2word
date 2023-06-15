import { LanguageType, LevelLanguageType } from './language-section.vm';

export const languageList: LanguageType[] = [
  { iso: 'es', name: 'Español' },
  { iso: 'it', name: 'Italiano' },
  { iso: 'en', name: 'Inglés' },
  { iso: 'gl', name: 'Gallego' },
  { iso: 'zh', name: 'Chino' },
  { iso: 'ca', name: 'Catalán' },
  { iso: 'el', name: 'Griego' },
  { iso: 'fr', name: 'Francés' },
  { iso: 'gn', name: 'Guaraní' },
  { iso: 'hi', name: 'Hindi' },
  { iso: 'ja', name: 'japonés' },
  { iso: 'ar', name: 'Arabe' },
  { iso: 'bn', name: 'Bengalí' },
  { iso: 'ru', name: 'Ruso' },
  { iso: 'pt', name: 'Portugués' },
  { iso: 'pl', name: 'Polaco' },
  { iso: 'nl', name: 'Alemán' },
  { iso: 'tr', name: 'Turco' },
  { iso: 'ko', name: 'Coreano' },
  { iso: 'jv', name: 'Javanés' },
  { iso: 'sl', name: 'Esloveno' },
  { iso: 'sk', name: 'Eslovako' },
  { iso: 'ro', name: 'Rumano' },
  { iso: 'th', name: 'Tailandes' },
  { iso: 'tl', name: 'Tagalog' },
  { iso: 'ko', name: 'Coreano' },
  { iso: 'hy', name: 'Armenio' },
];

export const levelLanguageList: LevelLanguageType[] = [
  { level: 'Elementary proficiency', spanish: 'Habilidad básica' },
  { level: 'Limited working proficiency', spanish: 'Habilidad limitada en el trabajo' },
  { level: 'Professional working proficiency', spanish: 'Habilidad profesional en el trabajo' },
  { level: 'Full professional proficiency', spanish: 'Habilidad profesional completo' },
  { level: 'Native or bilingual proficiency', spanish: 'Habilidad nativo o bilingüe' },
];
