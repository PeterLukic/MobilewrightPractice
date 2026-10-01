import { android } from 'mobilewright';

type MobileScreen = Awaited<ReturnType<typeof android.launch>>['screen'];

export class PageLogin {
  readonly title;
  readonly emailField;
  readonly passwordField;
  readonly forgotPasswordButton;
  readonly loginButton;
  readonly registerButton;
  readonly googleLoginButton;
  readonly facebookLoginButton;
  readonly failedLoginMessage;

  constructor(screen: MobileScreen) {
    this.title = screen.getByTestId('login_title');
    this.emailField = screen.getByTestId('login_email_text_field');
    this.passwordField = screen.getByTestId('login_password_text_field');
    this.forgotPasswordButton = screen.getByTestId('login_forgot_password_button');
    this.loginButton = screen.getByTestId('login_submit_button');
    this.registerButton = screen.getByTestId('login_no_account_button');
    this.googleLoginButton = screen.getByTestId('login_via_google_button');
    this.facebookLoginButton = screen.getByTestId('login_via_fb_button');

    // This label appears after an invalid login; it was supplied separately
    // and is not present in the initial login-screen view tree.
    this.failedLoginMessage = screen.getByLabel(
      'Pogrešni podaci za prijavu ili nalog nije aktivan.'
    );
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailField.fill(email);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordField.fill(password);
  }

  async tapLoginButton(): Promise<void> {
    await this.loginButton.tap();
  }

  async tapForgotPasswordButton(): Promise<void> {
    await this.forgotPasswordButton.tap();
  }

  async tapRegisterButton(): Promise<void> {
    await this.registerButton.tap();
  }

  async tapGoogleLoginButton(): Promise<void> {
    await this.googleLoginButton.tap();
  }

  async tapFacebookLoginButton(): Promise<void> {
    await this.facebookLoginButton.tap();
  }
}
