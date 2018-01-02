// we check if the SW is available on the browser
// if yes, run the code
// else don't run the SW
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(function() {
    console.log("Service worker registered!");
  });
}
