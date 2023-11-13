/**
 * Base User manager package.
 * Performs base user's operations:
 *  - Register,
 *  - Login,
 *  - Change password,
 */
import { setupAuthRouter } from './manager/router';
import { AuthMngrOPtions } from './manager/types';

export { AuthMngrOPtions } from './manager/types';

export const setupAuthManager = (options: AuthMngrOPtions) => {
  return setupAuthRouter(options);
};