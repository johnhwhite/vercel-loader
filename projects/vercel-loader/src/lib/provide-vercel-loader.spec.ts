import {TestBed} from "@angular/core/testing";
import {provideVercelLoader} from "./provide-vercel-loader";
import {IMAGE_LOADER} from "@angular/common";

describe('provideVercelLoader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideVercelLoader(),
      ]
    });
  });

  it('should work', () => {
    const loader = TestBed.inject(IMAGE_LOADER);
    expect(loader).toBeDefined();
    expect(loader({
      src: '/image.png',
    })).toEqual('/_vercel/image?url=%2Fimage.png&q=75');
    expect(loader({
      src: '/image.png',
      width: 100,
    })).toEqual('/_vercel/image?url=%2Fimage.png&q=75&w=100');
  });
});
