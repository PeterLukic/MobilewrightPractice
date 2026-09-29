# Mobilewright Practice

Simple Android mobile automation project using **Mobilewright +
TypeScript**.

## Prerequisites

-   Node.js
-   Android Studio
-   Android Emulator running
-   ADB configured
-   Java 17

## 1. Start Android Emulator

Start the **Pixel 8** emulator from Android Studio.

Check that the device is available:

``` powershell
adb devices
```

You should see something like:

``` text
emulator-5554    device
```

## 2. Start MobileCLI Server

Open the first terminal and run:

``` powershell
& ".\node_modules\@mobilenext\mobilecli-windows-amd64\mobilecli-windows-amd64.exe" server start --listen 127.0.0.1:12000
```

Keep this terminal running.

## 3. Run Mobilewright Tests

Open a second terminal and run:

``` powershell
npx mobilewright test
```

Run a specific test file:

``` powershell
npx mobilewright test tests/example.spec.ts
```

Run a insector for locators
``` powershell
npx mobilewright inspect
```

## 4. Open HTML Report

``` powershell
npx playwright show-report
```

## 5. Mobilewright Inspector

To inspect Android elements and find locators:

``` powershell
npx mobilewright inspect
```

Example locators:

``` typescript
screen.getByText('Products');

screen.getByLabel('View menu');

screen.getByRole('image', { name: 'Product Image' });
```

## Example Test

``` typescript
import { test, expect } from '@mobilewright/test';

test('open product', async ({ screen }) => {
  await expect(
    screen.getByText('Products')
  ).toBeVisible();

  await screen
    .getByRole('image', { name: 'Product Image' })
    .tap();
});
```

## Current Setup

-   **Platform:** Android
-   **Emulator:** Pixel 8
-   **Test framework:** Mobilewright
-   **Language:** TypeScript
-   **Demo application:** Sauce Labs My Demo App
