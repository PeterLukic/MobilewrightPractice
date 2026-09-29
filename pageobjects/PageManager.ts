import { android } from 'mobilewright';
import { PageHome } from './PageHome';
import { PageMyProfile } from './PageMyProfile';
import { PageLogin } from './PageLogin';

type MobileScreen = Awaited<ReturnType<typeof android.launch>>['screen'];

export class PageManager {
  readonly home: PageHome;
  readonly myProfile: PageMyProfile;
  readonly login: PageLogin;

  constructor(screen: MobileScreen) {
    this.home = new PageHome(screen);
    this.myProfile = new PageMyProfile(screen);
    this.login = new PageLogin(screen);
  }
}