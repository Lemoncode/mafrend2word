import { ManfredAwesomicCV } from '@/model';

import {
  ExperienceVm,
  mapFromMacCvToExperienceSectionVm,
} from '@lemoncode/manfred-common/src/doc-parts/experience-section';

import { experienceTemplate } from './experience-section.template';
import ejs from 'ejs';

export const generateExperiencieSection = (cv: ManfredAwesomicCV): string => {
  const experienceSectionVm = mapFromMacCvToExperienceSectionVm(cv);

  console.log('*** experienceSectionVm ***', experienceSectionVm);

  return generateExperienceSectionInner(experienceSectionVm);
};

const generateExperienceSectionInner = (experienceSectionVm: ExperienceVm[]): string => {
  const rootObject = {
    experienceCollection: experienceSectionVm,
  };

  return ejs.render(experienceTemplate, rootObject);
};
