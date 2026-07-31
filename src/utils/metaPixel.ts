import { MetaPixelEvent } from '../types';

// In-memory event log for real-time tracking debug display
class MetaPixelTracker {
  private eventLogs: MetaPixelEvent[] = [];
  private listeners: ((logs: MetaPixelEvent[]) => void)[] = [];

  public trackPageView() {
    this.fireEvent('PageView');
  }

  public trackInitiateCheckout() {
    this.fireEvent('InitiateCheckout', {
      value: 299,
      currency: 'INR',
      content_name: 'HR Interview Success Playbook 2026'
    });
  }

  public trackPurchase(orderId?: string) {
    if (!sessionStorage.getItem("hr_purchase_tracked")) {
      const generatedId = orderId || "HR_299_" + Date.now();
      this.fireEvent('Purchase', {
        value: 299,
        currency: 'INR',
        content_name: 'HR Interview Success Playbook 2026',
        content_type: 'digital_product',
        order_id: generatedId
      });
      sessionStorage.setItem("hr_purchase_tracked", "true");
    } else {
      console.log("[Meta Pixel] Purchase event already tracked in session.");
    }
  }

  private fireEvent(eventName: 'PageView' | 'InitiateCheckout' | 'Purchase', params?: MetaPixelEvent['params']) {
    const event: MetaPixelEvent = {
      eventName,
      params,
      timestamp: new Date().toLocaleTimeString()
    };

    this.eventLogs.unshift(event);

    // Call standard window.fbq if initialized in browser environment
    if (typeof window !== 'undefined' && (window as any).fbq) {
      if (params) {
        (window as any).fbq('track', eventName, params);
      } else {
        (window as any).fbq('track', eventName);
      }
    }

    console.log(`[Meta Pixel Tracked] ${eventName}:`, params || 'no-params');

    this.notifyListeners();
  }

  public getLogs(): MetaPixelEvent[] {
    return [...this.eventLogs];
  }

  public subscribe(listener: (logs: MetaPixelEvent[]) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener([...this.eventLogs]));
  }
}

export const pixelTracker = new MetaPixelTracker();
