import { BackbaseFePage } from './app.po';

describe('backbase-fe App', () => {
  let page: BackbaseFePage;

  beforeEach(() => {
    page = new BackbaseFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
