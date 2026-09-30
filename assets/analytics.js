/* Google Analytics 4. Local previews never load Google's tag or send events. */
(() => {
  const measurementId = 'G-30EMHJ8E3Z';
  const hostname = window.location.hostname.toLowerCase().replace(/^\[|\]$/g, '');
  const localHost = !hostname || hostname === 'localhost' || hostname.endsWith('.localhost') ||
    hostname.endsWith('.local') || hostname === '::1' || hostname === '0.0.0.0' ||
    /^127\./.test(hostname) || /^10\./.test(hostname) || /^192\.168\./.test(hostname) ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(hostname);
  if (localHost || !/^https?:$/.test(window.location.protocol)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });

  // Only page-defined labels are supplied by the interaction handlers.
  window.benueriaTrack = (eventName, parameters) => {
    window.gtag('event', eventName, { ...parameters, send_to: measurementId });
  };

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(tag);
})();
