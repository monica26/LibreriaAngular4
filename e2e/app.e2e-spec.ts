import { Proyecto1Page } from './app.po';

describe('proyecto1 App', function() {
  let page: Proyecto1Page;

  beforeEach(() => {
    page = new Proyecto1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
