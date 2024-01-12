import ejs from 'ejs';
import { StudiesSectionVm, mapFromMacCvToStudiesSectionVm } from '@lemoncode/manfred-common/studies-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { getLabels } from './labels';
import studiesSection from './studies-section.ejs?raw';

export const generateStudiesSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const studiesSectionVm = mapFromMacCvToStudiesSectionVm(cv);

  return generateStudiesSectionInner(studiesSectionVm, settings.language);
};

const generateStudiesSectionInner = (
  studiesSectionVm: StudiesSectionVm[],
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    studiesCollection: studiesSectionVm,
    labels: getLabels(language),
  };

  return ejs.render(studiesSection, rootObject);
};
