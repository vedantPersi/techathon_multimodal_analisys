import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: sample([
    'Rohan',
    'Swati',
    'Hari'
    
  ]),
  age: sample([
    50,
    38,
    47
  ]),
  gender: sample([
    'Male','Female'
  ]),
  weight: sample([
    50,60,67
  ]),
isVerified: faker.datatype.boolean(),
  status: sample(['Alive', 'Dead']),
  // role: sample([
  //   'Leader',
  //   'Hr Manager',
  //   'UI Designer',
  //   'UX Designer',
  //   'UI/UX Designer',
  //   'Project Manager',
  //   'Backend Developer',
  //   'Full Stack Designer',
  //   'Front End Developer',
  //   'Full Stack Developer',
  // ]),
}));

export default users;
