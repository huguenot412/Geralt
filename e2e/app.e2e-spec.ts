import { SaveMorePage } from './app.po';

describe('save-more App', function() {
  let page: SaveMorePage;

  beforeEach(() => {
    page = new SaveMorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
