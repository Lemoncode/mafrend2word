import ejs from 'ejs';
import { ExperienceVm, mapFromMacCvToExperienceSectionVm } from '@lemoncode/manfred-common/experience-section';
import { mapMarkdownToHTML } from '@/mappers';
import { Settings, Language, ManfredAwesomicCV } from '@/model';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import experienceTemplate from './experience-section.ejs?raw';
import { getLabels } from './labels';

export const generateExperiencesSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const experienceSectionVm = mapFromMacCvToExperienceSectionVm(cv);

  return generateExperienceSectionInner(experienceSectionVm, settings.language);
};

const generateExperienceSectionInner = (
  experienceSectionVm: ExperienceVm[],
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    experienceCollection: experienceSectionVm,
    labels: getLabels(language),
    mapMarkdownToHTML,
  };

  return ejs.render(experienceTemplate, rootObject);
};
