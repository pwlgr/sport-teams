import { TeamsPage } from './app.po';

describe('teams App', function() {
  let page: TeamsPage;

  beforeEach(() => {
    page = new TeamsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
