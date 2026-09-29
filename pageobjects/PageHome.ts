import { android } from 'mobilewright';

type MobileScreen = Awaited<ReturnType<typeof android.launch>>['screen'];

export class PageHome {
  readonly homeTab;
  readonly myProfileTab;

  constructor(screen: MobileScreen) {
    this.homeTab = screen.getByTestId('home_tab');
    this.myProfileTab = screen.getByTestId('profile_tab');
  }

  async tapHomeTab(): Promise<void> {
    await this.homeTab.tap();
  }

  async tapMyProfileTab(): Promise<void> {
    await this.myProfileTab.tap();
  }    


  
}