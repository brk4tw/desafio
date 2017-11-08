import { TrollscraftPage } from './app.po';

describe('trollscraft App', () => {
  let page: TrollscraftPage;

  beforeEach(() => {
    page = new TrollscraftPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
