# Vercel Loader

Provide an Angular image loader for Vercel.

```typescript
import { provideVercelLoader } from '@johnhwhite/vercel-loader';
//...
boostrapApplication(AppComponent, [
  provideVercelLoader(),
]);
```
## Build

Run `ng build vercel-loader` to build the project. The build artifacts will be stored in the `dist/vercel-loader` directory.

## Test

Run `ng test vercel-loader` to execute the unit tests via [Jest](https://jestjs.io).
