import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { getLabels } from './labels';
import aboutMeSection from './about-me-section.ejs?raw';
import { mapMarkdownToHTML } from '@/mappers';

export const generateAboutMeSection = (cv: ManfredAwesomicCV, settings: Settings): string => {
  const profileSectionVm = mapFromMacCvToProfileSectionVm(cv);

  return generateAboutMeSectionInner(profileSectionVm, settings.language);
};

const generateAboutMeSectionInner = (
  profileSectionVm: ProfileSectionVm,
  language: Language = ISO_SPANISH_LANGUAGE
): string => {
  const rootObject = {
    profile: profileSectionVm,
    labels: getLabels(language),
    mapMarkdownToHTML,
  };
  return ejs.render(aboutMeSection, rootObject);
};
