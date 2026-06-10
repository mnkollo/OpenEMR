import { faker } from '@faker-js/faker';

export const buildPatientWhoData = () => {
  const firstName = faker.person.firstName();
  const middleName = faker.person.middleName();
  const lastName = faker.person.lastName();
  const suffix = faker.person.suffix();
  return {
    title: 'Mr.',
    firstName,
    middleName,
    lastName,
    suffix,
    preferredName: firstName,
    externalId: faker.string.numeric(6),
    dob: faker.date.birthdate({ min: 18, max: 80, mode: 'age' }).toISOString().split('T')[0],
    birthSex: 'Male',
    ssn: faker.string.numeric(9),
    maritalStatus: 'Single',
    licenseID: faker.string.numeric(8),
    billingNote: faker.lorem.sentence(),
    genderIdentity: 'Identifies as Male',
    sex: 'Male',
    sexualOrientation: 'Straight or heterosexual',
    pronouns: 'he/him/his/his/himself',
    birthFirstName: firstName,
    birthMiddleName: middleName,
    birthLastName: lastName,
    socialSecurityNumber: faker.string.numeric(9),
  };
};

export const buildPatientContactData = () => ({
  address: faker.location.streetAddress(),
  city: faker.location.city(),
  state: faker.location.state(),
  zipCode: faker.location.zipCode('#####'),
  phoneHome: faker.phone.number(),
  phoneMobile: faker.phone.number(),
  email: faker.internet.email(),
});

export const buildPatientEmployerData = () => ({
  employerName: faker.company.name(),
  employerAddress: faker.location.streetAddress(),
  employerCity: faker.location.city(),
  employerState: faker.location.state(),
  employerZip: faker.location.zipCode('#####'),
  employerPhone: faker.phone.number(),
});

export const buildPatientChoicesData = () => ({
  pharmacy: faker.company.name(),
  provider: faker.person.fullName(),
  referralSource: 'Self',
});

export const buildPatientStatsData = () => ({
  language: 'English',
  ethnicity: 'Not Hispanic or Latino',
  race: 'White',
});

export const buildPatientMiscData = () => ({
  note: faker.lorem.sentence(),
});

export const buildPatientRelatedData = () => ({
  guardianName: faker.person.fullName(),
  guardianPhone: faker.phone.number(),
  emergencyContact: faker.person.fullName(),
  emergencyPhone: faker.phone.number(),
});

export const buildPatientInsuranceData = () => ({
  insuranceProvider: faker.company.name(),
  policyNumber: faker.string.alphanumeric(10),
  groupNumber: faker.string.alphanumeric(8),
  subscriberName: faker.person.fullName(),
});

export const buildNewPatientData = () => ({
  who: buildPatientWhoData(),
  contact: buildPatientContactData(),
  choices: buildPatientChoicesData(),
  employer: buildPatientEmployerData(),
  stats: buildPatientStatsData(),
  misc: buildPatientMiscData(),
  related: buildPatientRelatedData(),
  insurance: buildPatientInsuranceData(),
});