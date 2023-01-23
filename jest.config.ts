import { getJestProjects } from "@nrwl/jest"

import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
  '^.+\\.tsx?$': `ts-jest`,
},
  projects: getJestProjects(),
  modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/components/'],
};
export default config;
