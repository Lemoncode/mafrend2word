import { ManfredAwesomicCV } from '@/model';
import { ProfileSectionVm, RelevantLink } from './profile-section.vm';

// TODO Add Unit tests to this mapper
export const mapFromMacCvToProfileSectionVm = (cv: ManfredAwesomicCV): ProfileSectionVm => {
  const name = cv?.aboutMe?.profile?.name ?? '';
  const surnames = cv?.aboutMe?.profile?.surnames ?? '';
  const title = cv?.aboutMe?.profile?.title ?? '';
  const description = cv?.aboutMe?.profile?.description ?? '';
  const fullname = `${name ?? ''} ${surnames ?? ''}`;
  const emails = (cv?.aboutMe?.profile?.contact?.contactMails as string[]) ?? [];
  const revelantLinks = (cv?.aboutMe?.relevantLinks as RelevantLink[]) ?? [];

  return {
    name,
    surnames,
    title,
    description,
    fullname,
    emails,
    revelantLinks,
  };
};
