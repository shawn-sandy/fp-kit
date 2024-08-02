import '@test/jest-dom'

// *SOURCE https://markus.oberlehner.net/blog/using-test-jest-dom-with-vitest/?s=09&utm_source=pocket_mylist
import matchers from '@test/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
