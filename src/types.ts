export interface ModuleItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  keyTakeaways: string[];
  sampleContent?: string;
}

export interface QuestionItem {
  id: number;
  question: string;
  category: 'Personal' | 'HR Operations' | 'Recruitment' | 'Payroll & Legal' | 'Situational';
  frequency: 'High' | 'Must Know' | 'Top Rated';
  modelAnswer: string;
  keyTips: string[];
}

export interface HrDocument {
  id: string;
  title: string;
  purpose: string;
  components: string[];
  samplePreviewText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AudiencePersona {
  title: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface CustomerDetails {
  fullName: string;
  email: string;
  phone: string;
  state: string;
  paymentMethod: 'upi' | 'card' | 'netbanking';
}

export interface MetaPixelEvent {
  eventName: 'PageView' | 'InitiateCheckout' | 'Purchase';
  params?: {
    value?: number;
    currency?: string;
    content_name?: string;
    content_type?: string;
    order_id?: string;
  };
  timestamp: string;
}
