import { ManfredAwesomicCV } from '@/model';
import { ExperienceSectionVm } from './experience-section.vm';

export const mapFromMacCvToExperienceSectionVm = (cv: ManfredAwesomicCV): ExperienceSectionVm => {
  let jobes: ExperienceSectionVm = [];

  cv?.experience?.jobs?.map(job => {
    const name = job.organization.name ?? '';
    const role = job.roles?.reduce((result, role) => result + role.name + '. ', '') ?? '';
    const startDate = job.roles?.[job.roles.length - 1]?.startDate ?? '';
    const finishDate = job.roles?.[0]?.finishDate ?? 'Actualidad';
    const description =
      job.roles?.[0]?.challenges?.reduce(
        (result, challenge) => result + punctualizer(challenge.description) + ' ',
        ''
      ) ?? '';

    jobes = [...jobes, { name, role, startDate, finishDate, description }];
  });

  return jobes;
};

//Quizás la siguiente función podria ponerse a parte en algun archivo common por si hiciera falta más adelante.
const punctualizer = (x: string) => {
  if (x[x.length - 1] === '.') {
    return x;
  } else {
    return x + '.';
  }
};
