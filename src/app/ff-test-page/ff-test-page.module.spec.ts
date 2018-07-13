import { FfTestPageModule } from './ff-test-page.module';

describe('FfTestPageModule', () => {
  let ffTestPageModule: FfTestPageModule;

  beforeEach(() => {
    ffTestPageModule = new FfTestPageModule();
  });

  it('should create an instance', () => {
    expect(ffTestPageModule).toBeTruthy();
  });
});
