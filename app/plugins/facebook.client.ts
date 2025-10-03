export default defineNuxtPlugin(() => {
  return new Promise<void>((resolve) => {
    if ((window as any).FB) {
      resolve();
      return;
    }

    (window as any).fbAsyncInit = function () {
      (window as any).FB.init({
        appId: useRuntimeConfig().public.facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v18.0',
      });
      resolve();
    };

    (function (d, s, id) {
      let js: HTMLScriptElement;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs?.parentNode!.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
});
