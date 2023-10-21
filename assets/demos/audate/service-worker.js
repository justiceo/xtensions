/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/chrome/service-worker.ts ***!
  \**************************************/

const uninstallUrl = 'https://forms.gle/TuRLnDRFoXRNFuZP7';
const welcomeUrl = chrome.runtime.getURL('index.html#onboard');
const onInstalled = (details) => {
    // On fresh install, open page how to use extension.
    if (details.reason === 'install') {
        chrome.tabs.create({
            url: welcomeUrl,
            active: true,
        });
    }
    // Set url to take users upon uninstall.
    chrome.runtime.setUninstallURL(uninstallUrl, () => {
        if (chrome.runtime.lastError) {
            console.error('Error setting uninstall URL', chrome.runtime.lastError);
        }
    });
};
chrome.runtime.onInstalled.addListener(onInstalled);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE1BQU0sWUFBWSxHQUFHLHFDQUFxQyxDQUFDO0FBQzNELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFL0QsTUFBTSxXQUFXLEdBQUcsQ0FBQyxPQUF3QyxFQUFFLEVBQUU7SUFDL0Qsb0RBQW9EO0lBQ3BELElBQUksT0FBTyxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7UUFDaEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDakIsR0FBRyxFQUFFLFVBQVU7WUFDZixNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztLQUNKO0lBRUQsd0NBQXdDO0lBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7UUFDaEQsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUM1QixPQUFPLENBQUMsS0FBSyxDQUFDLDZCQUE2QixFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2F1ZGF0ZS12b2ljZS1zZWFyY2gvLi9zcmMvY2hyb21lL3NlcnZpY2Utd29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgdW5pbnN0YWxsVXJsID0gJ2h0dHBzOi8vZm9ybXMuZ2xlL1R1UkxuRFJGb1hSTkZ1WlA3JztcbmNvbnN0IHdlbGNvbWVVcmwgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2luZGV4Lmh0bWwjb25ib2FyZCcpO1xuXG5jb25zdCBvbkluc3RhbGxlZCA9IChkZXRhaWxzOiBjaHJvbWUucnVudGltZS5JbnN0YWxsZWREZXRhaWxzKSA9PiB7XG4gIC8vIE9uIGZyZXNoIGluc3RhbGwsIG9wZW4gcGFnZSBob3cgdG8gdXNlIGV4dGVuc2lvbi5cbiAgaWYgKGRldGFpbHMucmVhc29uID09PSAnaW5zdGFsbCcpIHtcbiAgICBjaHJvbWUudGFicy5jcmVhdGUoe1xuICAgICAgdXJsOiB3ZWxjb21lVXJsLFxuICAgICAgYWN0aXZlOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gU2V0IHVybCB0byB0YWtlIHVzZXJzIHVwb24gdW5pbnN0YWxsLlxuICBjaHJvbWUucnVudGltZS5zZXRVbmluc3RhbGxVUkwodW5pbnN0YWxsVXJsLCAoKSA9PiB7XG4gICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igc2V0dGluZyB1bmluc3RhbGwgVVJMJywgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcbiAgICB9XG4gIH0pO1xufTtcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKG9uSW5zdGFsbGVkKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9