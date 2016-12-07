import { AngNinjaPage } from './app.po';

describe('ang-ninja App', function() {
  let page: AngNinjaPage;

  beforeEach(() => {
    page = new AngNinjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
