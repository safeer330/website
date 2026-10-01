export interface PricingPlan {
  name: string;
  duration: string;
  price?: string;
  features: string[];
  popular?: boolean;
}

export const subscriptionPlans: PricingPlan[] = [
  {
    name: '1 Month', duration: '30 Days Access', price: '€12',
    features: ['22,000+ Live Channels', '120,000+ Movies & Series', '15,000+ VOD Channels', 'HD / FHD / 4K Quality', '1 Connection', 'All Devices Supported'],
  },
  {
    name: '3 Months', duration: '90 Days Access', price: '€20',
    features: ['22,000+ Live Channels', '120,000+ Movies & Series', '15,000+ VOD Channels', 'HD / FHD / 4K Quality', '1 Connection', 'All Devices Supported'],
  },
  {
    name: '6 Months', duration: '180 Days Access', price: '€40',
    popular: true,
    features: ['22,000+ Live Channels', '120,000+ Movies & Series', '15,000+ VOD Channels', 'HD / FHD / 4K Quality', '2 Connections', '24/7 Priority Support'],
  },
  {
    name: '12 Months', duration: '365 Days Access', price: '€60',
    features: ['22,000+ Live Channels', '120,000+ Movies & Series', '15,000+ VOD Channels', 'HD / FHD / 4K Quality', '2 Connections', '24/7 Priority Support'],
  },
];

export const resellerCreditPlans: PricingPlan[] = [
  {
    name: 'Starter Pack', duration: '10 Credits',
    features: ['10 Subscription Credits', 'Full Reseller Panel Access', 'Create Any Duration Sub', 'Manage Unlimited Clients', 'Standard Support', 'Email Notifications'],
  },
  {
    name: 'Pro Pack', duration: '25 Credits',
    popular: true,
    features: ['25 Subscription Credits', 'Full Reseller Panel Access', 'Create Any Duration Sub', 'Manage Unlimited Clients', 'Priority Support', 'Custom Branding Option', 'Lower Per-Credit Cost'],
  },
  {
    name: 'Business Pack', duration: '50 Credits',
    features: ['50 Subscription Credits', 'Full Reseller Panel Access', 'Create Any Duration Sub', 'Manage Unlimited Clients', 'Priority Support', 'Custom Branding Option', 'Best Per-Credit Rate'],
  },
  {
    name: 'Enterprise Pack', duration: '100 Credits',
    features: ['100 Subscription Credits', 'Full Reseller Panel Access', 'Create Any Duration Sub', 'Manage Unlimited Clients', 'Dedicated Account Manager', 'Full White-Label Panel', 'Lowest Per-Credit Rate'],
  },
];

export const restreamPlans: PricingPlan[] = [
  {
    name: 'Starter', duration: '100 Connections',
    features: ['100 Concurrent Connections', 'All 22K+ Channels', 'HLS / MPEG-TS Output', '1080p FHD Quality', 'Basic CDN Distribution', 'Email Support'],
  },
  {
    name: 'Professional', duration: '500 Connections',
    popular: true,
    features: ['500 Concurrent Connections', 'All 22K+ Channels', 'HLS / MPEG-TS / RTMP', '4K UHD Quality', 'Global CDN Distribution', 'Priority Support', 'Custom Stream Labels'],
  },
  {
    name: 'Business', duration: '1,000 Connections',
    features: ['1,000 Concurrent Connections', 'All 22K+ Channels', 'All Protocols Supported', '4K UHD Quality', 'Premium CDN + Failover', '24/7 Dedicated Support', 'Custom Stream Labels', 'API Access'],
  },
  {
    name: 'Enterprise', duration: '5,000+ Connections',
    features: ['5,000+ Concurrent Connections', 'All 22K+ Channels', 'All Protocols + Custom', '4K UHD Quality', 'Dedicated Infrastructure', 'Dedicated Account Manager', 'SLA Guarantee', 'Full API & Integration'],
  },
];