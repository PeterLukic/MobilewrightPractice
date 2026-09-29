import { android } from 'mobilewright';

type MobileScreen = Awaited<ReturnType<typeof android.launch>>['screen'];

export class PageMyProfile {
  readonly loginButton;

  constructor(screen: MobileScreen) {
    this.loginButton = screen. getByTestId('my_halo_login_btn')
  

  }

  async tapLoginButton(): Promise<void> {
    await this.loginButton.tap();
  }


}