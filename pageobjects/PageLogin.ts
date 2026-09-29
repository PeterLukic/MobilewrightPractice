import { android } from 'mobilewright';

type MobileScreen = Awaited<ReturnType<typeof android.launch>>['screen'];

export class PageLogin {
  readonly emailField;
  readonly loginButton;
  readonly passwordField;
  readonly failedLoginMessage;

  constructor(screen: MobileScreen) {
    this.emailField = screen.getByTestId('login_email_text_field');
    this.passwordField = screen.getByTestId('login_password_text_field');
    this.loginButton = screen. getByTestId('login_submit_button');
    this.failedLoginMessage = screen.getByLabel('Pogrešni podaci za prijavu ili nalog nije aktivan.'
    );
  }

  async tapLoginButton(): Promise<void> {
    await this.loginButton.tap();
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailField.fill(email);
  } 

  async enterPassword(password: string): Promise<void> {          
    await this.passwordField.fill(password);
  }

}