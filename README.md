# Mobilewright Practice

Android UI automation with TypeScript, Mobilewright, and Playwright BDD.

## Prerequisites

- Node.js and npm
- Android SDK tools and ADB configured
- An Android emulator running or an Android phone connected by USB
- Java configured for the Android tooling

Install the project dependencies from the repository root:

```powershell
npm install
```

Confirm that ADB can see your device:

```powershell
adb devices
```

It should list a device with the status `device` (for example, `emulator-5554    device`). The Mobilewright configuration targets Android and uses the app package `com.halooglasi.android`; make sure that app is available on the device.

## Start the MobileCLI server

In a separate PowerShell terminal at the repository root, run:

```powershell
& ".\node_modules\@mobilenext\mobilecli-windows-amd64\mobilecli-windows-amd64.exe" server start --listen 127.0.0.1:12000
```

Keep this terminal open while running tests.

## Run BDD scenarios

In another terminal at the repository root, generate the Playwright tests from the feature files, then run them:

```powershell
npx bddgen
npx playwright test
```

You can also run the two commands on one PowerShell line:

```powershell
npx bddgen; npx playwright test
```

The BDD configuration in `playwright.config.ts` reads `features/**/*.feature` and loads step definitions from `features/steps/**/*.ts` and `features/support/**/*.ts`. Add new scenarios and matching steps in those locations. Its reporter writes an HTML report without opening it automatically.

To run a subset after generating the tests, use a Playwright filter, for example:

```powershell
npx bddgen
npx playwright test --grep "Login with invalid credentials"
```

## Run direct Mobilewright tests

The separate `mobilewright.config.ts` reads direct tests from `tests/`. Run that suite with:

```powershell
npx mobilewright test
```

To run a specific direct test file:

```powershell
npx mobilewright test tests/<your-test-file>.spec.ts
```

The `npm test` script also runs `mobilewright test`. It does not generate or run BDD scenarios.

## Inspect elements and view reports

Find Android locators with:

```powershell
npx mobilewright inspect
```

Open the Playwright BDD HTML report with:

```powershell
npx playwright show-report
```
