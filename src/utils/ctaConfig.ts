// Central config for CTA payment / resend link
import { pixelTracker } from './metaPixel';

export const DEFAULT_CTA_LINK = "https://pages.razorpay.com/hrplaybook";

export const getCtaLink = (): string => {
  return localStorage.getItem("custom_cta_resend_link") || DEFAULT_CTA_LINK;
};

export const setCtaLink = (url: string): void => {
  localStorage.setItem("custom_cta_resend_link", url);
};

export const handleCtaClick = (customUrl?: string): void => {
  pixelTracker.trackInitiateCheckout();
  const targetUrl = customUrl || getCtaLink();
  window.open(targetUrl, "_blank", "noopener,noreferrer");
};

