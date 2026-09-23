import { createLandingPage } from '../factories/createLandingPage';

export const pockraftLandingPage = createLandingPage({
  brand: {
    name: 'Pockraft',
    category: 'Commercial landing page factory',
    logoSrc: '/pockraft-logo.png',
    copyrightYear: '2026',
    metaTitle: 'Pockraft - React Landing Page Template',
    metaDescription:
      'Pockraft is a polished, reusable React landing page template for presenting and launching products.',
  },
  navigation: [
    { label: 'About', href: '/#about' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Pricing', href: '/#pricing' },
  ],
  hero: {
    eyebrow: 'Pockraft - commercial landing page template',
    title: 'A clear promise that makes your project easy to understand.',
    description:
      'Use one or two sentences to explain who this project is for, what problem it solves, and why the solution is worth trying.',
    primaryAction: { label: 'Try the demo', href: '/demo' },
    secondaryAction: { label: 'See how it works', href: '#how-it-works', variant: 'outline' },
    trustSignals: [
      { icon: 'layers', label: 'Reusable sections' },
      { icon: 'zap', label: 'Fast by default' },
      { icon: 'check', label: 'Accessible patterns' },
    ],
  },
  features: {
    eyebrow: 'Why this project',
    title: 'Show people why your idea matters.',
    description:
      'Use these cards for the three strongest reasons someone should understand, trust, or try your project.',
    items: [
      {
        icon: 'target',
        title: 'Position the offer',
        description: 'Explain the real user problem your project addresses and why current options fall short.',
      },
      {
        icon: 'layers',
        title: 'Package the workflow',
        description: 'Show how the project turns a complicated task into a clear, approachable experience.',
      },
      {
        icon: 'trending',
        title: 'Prove the outcome',
        description: 'Describe the meaningful result users get, not only the features they receive.',
      },
    ],
  },
  process: {
    eyebrow: 'How it works',
    title: 'Make the journey feel obvious.',
    items: [
      {
        icon: 'search',
        label: 'Step 01',
        title: 'Understand',
        description: 'Start with the user, their context, and the job they need to complete.',
      },
      {
        icon: 'wrench',
        label: 'Step 02',
        title: 'Create',
        description: 'Turn the strongest insight into a focused product people can actually use.',
      },
      {
        icon: 'rocket',
        label: 'Step 03',
        title: 'Improve',
        description: 'Learn from real feedback and make each version more valuable than the last.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Simple pricing',
    title: 'Choose the plan that fits your needs.',
    description: 'Start with the free tier and upgrade as your project grows.',
    tiers: [
      {
        icon: 'sparkles',
        label: 'Basic',
        price: '$9',
        period: '/month',
        description: 'Perfect for individuals and small projects.',
        features: ['Up to 1,000 API calls', 'Basic analytics', 'Email support', 'Community access'],
        action: { label: 'Get Basic', href: '/demo', variant: 'outline' },
      },
      {
        icon: 'zap',
        label: 'Pro',
        price: '$29',
        period: '/month',
        description: 'For growing teams and serious projects.',
        features: [
          'Up to 10,000 API calls',
          'Advanced analytics',
          'Priority support',
          'Team collaboration',
          'Custom workflows',
        ],
        highlighted: true,
        action: { label: 'Get Pro', href: '/demo' },
      },
      {
        icon: 'users',
        label: 'Enterprise',
        price: 'Custom',
        description: 'For organizations with specific scale, security, or integration needs.',
        features: [
          'Unlimited API calls',
          'Dedicated support',
          'Custom integrations',
          'SLA guarantees',
          'White-label options',
        ],
        action: { label: 'Contact sales', href: '/demo', variant: 'outline' },
      },
    ],
  },
  cta: {
    eyebrow: 'Ready when you are',
    title: 'Give the project a clear next step.',
    description: 'Close the pitch with one action: open the demo, join the waitlist, start a trial, or contact the team.',
    action: { label: 'Launch the project', href: '/demo', variant: 'inverse' },
  },
  demo: {
    eyebrow: 'Project demo',
    title: 'Show the product, not another paragraph.',
    description: 'Use this route for a live product, interactive prototype, walkthrough video, or focused proof of concept.',
    frameUrl: 'your-project-demo.com',
    frameNote: 'Embed your project demo or video here',
  },
  contact: {
    eyebrow: 'Contact the team',
    title: 'Interested in the project?',
    description: 'Use this section for feedback, early access requests, partnerships, or questions after the pitch.',
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell us what you think...',
      submitLabel: 'Send message',
    },
  },
  footer: {
    description: 'A polished React landing page template for presenting and launching products.',
    columns: [
      {
        title: 'Project',
        links: [
          { label: 'About', href: '/#about' },
          { label: 'How it works', href: '/#how-it-works' },
          { label: 'Pricing', href: '/#pricing' },
          { label: 'Demo', href: '/demo' },
        ],
      },
      {
        title: 'Resources',
        links: [
          {
            label: 'Source code',
            href: 'https://github.com/MoriartyLink/landing-page-template-pockraft',
            external: true,
          },
          {
            label: 'Documentation',
            href: 'https://github.com/MoriartyLink/landing-page-template-pockraft#readme',
            external: true,
          },
          {
            label: 'Creator on GitHub',
            href: 'https://github.com/MoriartyLink',
            external: true,
          },
        ],
      },
    ],
    acknowledgements: [
      {
        label: 'Reference template created by Min Thu Khaing (@MoriartyLink).',
        href: 'https://github.com/MoriartyLink',
      },
      {
        label:
          'With sincere gratitude to AppStack-GVN/BuildersQuickTurnStack for the foundation and inspiration that helped make this app possible.',
        href: 'https://github.com/AppStack-GVN/BuildersQuickTurnStack',
      },
    ],
    tagline: 'Open-source landing page template',
  },
});
