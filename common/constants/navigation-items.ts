import type { NavigationItem } from "@interfaces";

const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Benefits",
    subitems: [
      {
        label: 'No Monthly Fees',
        path: '/no-fees'
      },
      {
        label: 'Free Debit Card',
        path: '/debit-card'
      },
      {
        label: 'Fee-Free Overdraft',
      },
      {
        label: 'Build Credit',
      },
      {
        label: 'Get Paid Early',
        path: '/get-paid-early'
      },
      {
        label: '60,000+ Fee-Free ATMs',
      },
      {
        label: 'High Yield Savings Account',
        path: '/savings-account',
      },
      {
        label: 'Send and Receive Money',
      },
      {
        label: 'Security and Control',
        path: '/security-and-control'
      }
    ],
  },
  {
    label: "Accounts",
    subitems: [
      {
        label: 'Checking Account',
      },
      {
        label: 'Credit Builder',
      },
      {
        label: 'Savings Account',
        path: '/savings-account'
      }
    ],
  },
  {
    label: 'Who we are',
    path: '/about-us',
    subitems: [
      {
        label: 'About Us',
        path: '/about-us',
      },
      {
        label: 'In the News',
      },
      {
        label: 'Chime Financial, Inc.',
      },
      {
        label: 'In The Community',
      },
      {
        label: 'Careers',
      }
    ]
  },
  {
    label: "Learn",
    path: '/faq',
    subitems: [
      {
        label: 'Blog',
      },
      {
        label: 'Help Center',
      },
      {
        label: 'FAQs',
        path: '/faq'
      },
      {
        label: 'Online Banking',
      },
      {
        label: 'Second Chance Banking',
        path: '/second-chance-banking'
      },
      {
        label: 'Tax Refund',
      }
    ]
  }
];

export default NAVIGATION_ITEMS;