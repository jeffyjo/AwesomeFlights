import { AwesomeFlightPage } from './app.po';

describe('awesome-flight App', function() {
  let page: AwesomeFlightPage;

  beforeEach(() => {
    page = new AwesomeFlightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
