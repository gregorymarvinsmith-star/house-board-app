# House Board launcher

A tiny page that opens the House Board full-screen with an app icon, so it can be added to an iPhone or Android home screen like a real app.

It holds no data or names: just this page, the icon, the app manifest, and `sw.js`, which shows the board's chat alerts on a phone that turned them on and opens the app when one is tapped. The board itself (and its PIN sign-in) lives in a private repository and runs on Google Apps Script.

Open https://gregorymarvinsmith-star.github.io/house-board-app/ and use **Add to Home Screen** (iPhone: Safari → Share) or **Install app** (Android: Chrome menu).

**Wall tablet:** install from https://gregorymarvinsmith-star.github.io/house-board-app/?wall instead. That link uses `wall.webmanifest`, which opens the board full screen with no Android status or navigation bar (swipe in from the bottom edge to show them for a moment). Phones keep the normal link.
