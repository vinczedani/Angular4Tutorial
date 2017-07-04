import { Ng4tutorialPage } from './app.po';

describe('ng4tutorial App', () => {
  let page: Ng4tutorialPage;

  beforeEach(() => {
    page = new Ng4tutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
