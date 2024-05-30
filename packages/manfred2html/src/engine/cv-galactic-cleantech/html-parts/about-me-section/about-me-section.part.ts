import ejs from 'ejs';
import { ProfileSectionVm, mapFromMacCvToProfileSectionVm } from '@lemoncode/manfred-common/profile-section';
import { ISO_SPANISH_LANGUAGE } from '@/engine/engine.const';
import { mapMarkdownToHTML } from '@/mappers';
import { ManfredAwesomicCV, Settings, Language } from '@/model';
import { getLabels } from './labels';
import aboutMe from './about-me-section.ejs?raw';

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

  return ejs.render(aboutMe, rootObject);
};
