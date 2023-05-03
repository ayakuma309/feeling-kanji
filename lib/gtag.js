export const GA_MEASUREMENT_ID = 'G-QHYLNDBL8X';

export const pageview = (url) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
