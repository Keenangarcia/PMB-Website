
import React from 'react';
import { NavItem, Pillar, Step, Metric, UseCase } from './types';
import { Zap, ShieldAlert, BarChart3, Search, Clock, CheckCircle2 } from 'lucide-react';

export const PRIMARY_NAV: NavItem[] = [
  {
    label: "Solutions",
    type: "dropdown",
    items: [
      { label: "AI Bill Analyzer™", href: "#" },
      { label: "Electricity Procurement", href: "#" },
      { label: "Rate Shock Protection™", href: "#" },
      { label: "Contract Intelligence™", href: "#" }
    ]
  },
  {
    label: "Who We Serve",
    type: "dropdown",
    items: [
      { label: "Small Businesses", href: "#" },
      { label: "Multi-Location", href: "#" },
      { label: "Industrial & Manufacturing", href: "#" }
    ]
  },
  { label: "ERCOT Insights", href: "#", type: "link" },
  { label: "Resources", href: "#", type: "link" },
  { label: "Contact", href: "#", type: "link" }
];

export const PILLARS: Pillar[] = [
  {
    title: "AI Bill Analyzer™",
    description: "Detects hidden fees, pass-through abuse, and pricing anomalies."
  },
  {
    title: "Contract Intelligence™",
    description: "Flags evergreen clauses, renewal traps, and supplier-friendly terms."
  },
  {
    title: "ERCOT Market Monitoring™",
    description: "Tracks volatility and timing so you don’t sign at the wrong moment."
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    step: 1,
    title: "Upload Your Bill",
    description: "Securely submit your recent electricity bill or ESI IDs."
  },
  {
    step: 2,
    title: "AI Deep Analysis",
    description: "Our system audits rates, delivery charges, pass-throughs, and contract risk."
  },
  {
    step: 3,
    title: "Action Plan",
    description: "You receive savings opportunities, risk alerts, and next-step recommendations."
  }
];

export const METRICS: Metric[] = [
  { label: "Bills Analyzed", value: "10,000+" },
  { label: "Avg Savings Identified", value: "12%–38%" },
  { label: "Texas TDUs Covered", value: "6" },
  { label: "AI Alerts Generated", value: "100,000+" }
];

export const USE_CASES: UseCase[] = [
  {
    segment: "Restaurants & Retail",
    pain: "Unpredictable bills and rising delivery charges"
  },
  {
    segment: "Warehouses & Manufacturing",
    pain: "High demand charges and contract exposure"
  },
  {
    segment: "Multi-Location Businesses",
    pain: "Lack of visibility across multiple ESI IDs"
  }
];

export const EXPERTISE_AREAS = [
  "ERCOT pricing mechanics",
  "TDU delivery charges",
  "Pass-through structures",
  "Auto-renewal risk",
  "Indexed vs fixed strategies"
];
