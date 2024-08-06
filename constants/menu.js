import { paths } from './paths';

export const menuHeader = [
  {
    name: 'Home',
    url: paths.home,
  },
  {
    name: 'About us',
    url: paths.aboutUs,
  },
  {
    name: 'Solutions',
    url: '',
    sub: [
      {
        name: 'Map Feature',
        url: paths.solutions.mapFeature,
      },
      {
        name: 'Autonomous',
        url: paths.solutions.autonomous,
      },
      {
        name: 'Energy',
        url: paths.solutions.energy,
      },
      {
        name: 'Tax management',
        url: paths.solutions.taxManagement,
      },
      {
        name: 'Digital twin',
        url: paths.solutions.digitalTwin,
      },
    ],
  },
  {
    name: 'Contact',
    url: paths.contact,
  },
];

export const menuDrawer = [
  {
    name: 'Home',
    url: paths.home,
  },
  {
    name: 'About us',
    url: paths.aboutUs,
  },
  {
    name: 'Solutions',
    url: '',
    sub: [
      {
        name: 'Map Feature',
        url: paths.solutions.mapFeature,
      },
      {
        name: 'Autonomous',
        url: paths.solutions.autonomous,
      },
      {
        name: 'Energy',
        url: paths.solutions.energy,
      },
      {
        name: 'Tax management',
        url: paths.solutions.taxManagement,
      },
      {
        name: 'Digital twin',
        url: paths.solutions.digitalTwin,
      },
    ],
  },
  {
    name: 'Developer',
    url: paths.developer,
  },
  {
    name: 'Download',
    url: paths.download,
  },
  {
    name: 'OpenStreetMap',
    url: paths.openStreetMap,
  },
  {
    name: 'Contact',
    url: paths.contact,
  },
  {
    name: 'Licenses',
    url: paths.licenses,
  },
];

export const menuPolicy = [
  {
    name: 'Privacy policy',
    url: paths.privacyPolicy,
  },
  {
    name: 'Cookie policy',
    url: paths.cookiePolicy,
  },
  {
    name: 'Terms & Conditions',
    url: paths.terms,
  },
];

export const menuFooter = [
  {
    title: 'About',
    items: [
      { name: 'About us', url: paths.aboutUs },
      { name: 'Contact', url: paths.contact },
    ],
  },
  {
    title: 'Solutions',
    items: [
      { name: 'Map Feature', url: paths.solutions.mapFeature },
      { name: 'Autonomous', url: paths.solutions.autonomous },
      { name: 'Tax Management', url: paths.solutions.taxManagement },
      { name: 'Energy', url: paths.solutions.energy },
      { name: 'Digital Twin', url: paths.solutions.digitalTwin },
    ],
  },
  {
    title: 'Apps',
    items: [
      { name: 'Android App', url: paths.home },
      { name: 'IOS App', url: paths.home },
      { name: 'Desktop Installer', url: paths.home },
      { name: 'Web Platform', url: paths.home },
    ],
  },
  {
    title: 'Developers',
    items: [
      { name: 'For Developer', url: paths.developer },
      { name: 'Documentation', url: paths.developer },
    ],
  },
];

export const menuPolicyFooter = [
  {
    name: 'Privacy policy',
    url: paths.privacyPolicy,
  },
  {
    name: 'Cookie policy',
    url: paths.cookiePolicy,
  },
  {
    name: 'Terms & Conditions',
    url: paths.terms,
  },
  {
    name: 'Licenses',
    url: paths.licenses,
  },
  {
    name: 'Data Processing',
    url: paths.dataProcessing,
  },
];
