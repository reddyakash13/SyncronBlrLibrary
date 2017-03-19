import { SyncronBlrLibraryPage } from './app.po';

describe('syncron-blr-library App', () => {
  let page: SyncronBlrLibraryPage;

  beforeEach(() => {
    page = new SyncronBlrLibraryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
