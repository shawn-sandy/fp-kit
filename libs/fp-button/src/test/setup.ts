import '@testing-library/jest-dom'

// *SOURCE https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/?s=09&utm_source=pocket_mylist
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
