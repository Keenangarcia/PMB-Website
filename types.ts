
export interface NavItem {
  label: string;
  href?: string;
  items?: { label: string; href: string }[];
  type?: 'dropdown' | 'link';
}

export interface Pillar {
  title: string;
  description: string;
}

export interface Step {
  step: number;
  title: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string | number;
}

export interface UseCase {
  segment: string;
  pain: string;
}

export interface LeadFormData {
  business_name: string;
  contact_name: string;
  email: string;
  phone: string;
  upload_bill: File | null;
}
