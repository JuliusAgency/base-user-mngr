## Base User manager for app with base-user-mongo (base-user-sql)

The base-user-mngr package - is a component of the @jla/node [packages set](https://github.com/JuliusAgency/node-packages-set) for Nodejs applications.  

<p>
  <a href="https://www.npmjs.com/package/@jla/base-user-mngr" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@jla/base-user-mngr.svg">
  </a>
  <a href="https://github.com/JuliusAgency/base-user-mngr#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/base-user-mngr/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/JuliusAgency/base-user-mngr/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

### Installation
```bash
  npm install --save @jla/base-user-mngr
```

### Pre-conditions:
```
The package is dedicated to be used with the following @jla packages:
  - @jla/auth-jwt or auth-session;  
  - @jla/auth-strategies;  
  - @jla/base-user-mongo; or '@jla/base-user-sql   
```

### Usage  
```
  import { AuthMngrOPtions, setupAuthManager } from '@jla/base-user-mngr';  
  import { BaseUser } from '@jla/base-user-sql' (@jla/base-user-mongo);  

  // Initialize the package  
  const authMngrOPtions: AuthMngrOPtions = {  
    User: baseUser,  
    encode: encodeToken,  
    strategy: strategy,  
  };  

  const authRouter = setupAuthManager(authMngrOPtions);  

  // Use the authRouter....  

```
