# Architecture Overview

this actuchecture will be used across multiple web projects, it contains eslint, prettier, jest, react-router, redux-saga.

# Main project structure

src
- colors (**colors can be declared globally and used in .scss file**)

- components (**all the reusable components can be kept here**)

- errorBoundary (**the whole project is wrapped under an error boundary**)

- helpers (**all the utility functions that can be used again and again , can be kept here, for example capitalizeSentence**)

- icons (**all the icons to be used throughout the project can be kept here**)

- mocks (**all the mocks can be kept here**)

- pages (**all the full fleged pages are kept here , like homapage or SPP**)

- redux (**used redux saga for state management**)

- app.scss (**global styles**)

- app.tsx (**all the elements can be imported here**)

- constant.ts (**global constants can be declared here**)

- favicon.svg

- jest.d.ts

- main.tsx (**entry point**)

- types.ts (**global types can be defined here**)

- vite-env.d.ts 

.eslintrc.json

.gitignore

.prettierrc

index.html

jest.config.ts

jest.setup.ts

package-lock.json

package.json

tsconfig.json

tsconfig.node.json

vite.config.ts

# redux folder structure

actions

- index.ts (**all actions can be exported here**)

- productDataActions.ts (**product related actions are declared here, will bee triggered by dispatch further**)

reducers

- productReducer.ts (**product reducers**)

- rootReducer.ts (**all reducers are combined here**)

sagas

- tasks(**generator functions**)

- utils (**all the utility functions are defined here**)

- productSaga.ts (**watcher saga**)

- rootSaga.ts (**combine all sagas**)

types

- index.ts (**all types are exported here**)

- productDataTypes.ts (**all product related types**)

store.ts (**store configuration**)

# elements structure inside pages or components folder

index.tsx (**entry point**)

singleProduct.scss (**styles**)

singleProductContainer.tsx (**this passes the working logic to the presentational component**)

singleProductComponent.tsx (**presentational component**)

constants.ts (**all constants are declared here**)

types.ts (**all types are declared here**)

test

- test file 

- snapshots
