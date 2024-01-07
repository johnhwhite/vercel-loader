# Vercel Loader

Provide an Angular image loader for Vercel.

```typescript
import { provideVercelLoader } from '@johnhwhite/vercel-loader';
//...
boostrapApplication(AppComponent, [
  provideVercelLoader({
    loader: 'lazy',
    rootMargin: '200px',
    threshold: 0.01,
  }),
]);

```
