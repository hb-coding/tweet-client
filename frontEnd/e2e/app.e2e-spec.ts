import { TweetClientPage } from './app.po';

describe('tweet-client App', () => {
  let page: TweetClientPage;

  beforeEach(() => {
    page = new TweetClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
