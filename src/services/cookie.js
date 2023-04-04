export function getCookie(name) {
  if (!process.browser) return process.SERVER_COOKIE ? process.SERVER_COOKIE[name] : undefined;
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + '=([^;]*)')
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, expires) {
  let expiryValue = null
  if (expires) {
    const offset = new Date().getTimezoneOffset();
    expiryValue = new Date((expires + offset * 60) * 1000);
  }
  if (typeof document !== 'undefined') {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    if (isFirefox && expires) expiryValue = new Date((expires) * 1000)
    const domain = document.location.hostname;

    let options = {
      path: '/',
      domain: domain.includes(process.env.MAIN_DOMAIN) ? process.env.MAIN_DOMAIN : domain,
      expires: expiryValue,
    };

    let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue;
      }
    }
    document.cookie = updatedCookie;
  }
}

export function removeCookie(name) {
  const domain = document.location.hostname;
  const removedCookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${
    domain.includes(process.env.MAIN_DOMAIN) ? process.env.MAIN_DOMAIN : domain
  }`;
  if (domain.includes('builder.xperiencify')) {
    const extraRemovedCookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
    document.cookie = extraRemovedCookie;
  } else {
    document.cookie = removedCookie;
  }
}
