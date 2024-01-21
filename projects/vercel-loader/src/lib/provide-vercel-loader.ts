import { Provider } from '@angular/core';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';

export function provideVercelLoader(): Provider[] {
  const loaderFn = (config: ImageLoaderConfig) => {
    const params = new URLSearchParams({
      url: config.src,
      q: `${config.loaderParams?.['quality'] || 75}`,
    });
    if (config.width) {
      params.set('w', `${config.width}`);
    }
    return `/_vercel/image?${params.toString()}`;
  };
  return [{provide: IMAGE_LOADER, useValue: loaderFn}];
}
