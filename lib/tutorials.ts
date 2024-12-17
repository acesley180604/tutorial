export interface Tutorial {
  id: string;
  title: string;
  description: string;
  category: 'Primary Student' | 'Secondary Student' | 'Tertiary Student';
  location: string;
  time?: string;
  date?: string;
  wages?: string;
}

export const tutorials: Tutorial[] = [
  {
    id: '1',
    title: 'Basic Mathematics',
    description: 'Learn fundamental math concepts for primary students.',
    category: 'Primary Student',
    location: 'Central and Western',
  },
  {
    id: '2',
    title: 'Introduction to Science',
    description: 'Explore basic scientific concepts for primary education.',
    category: 'Primary Student',
    location: 'Eastern',
  },
  {
    id: '3',
    title: 'Algebra Fundamentals',
    description: 'Master the basics of algebra for secondary students.',
    category: 'Secondary Student',
    location: 'Southern',
  },
  {
    id: '4',
    title: 'World History Overview',
    description: 'Comprehensive overview of world history for secondary education.',
    category: 'Secondary Student',
    location: 'Wan Chai',
  },
  {
    id: '5',
    title: 'Advanced Calculus',
    description: 'In-depth study of calculus for tertiary students.',
    category: 'Tertiary Student',
    location: 'Yau Tsim Mong',
  },
  {
    id: '6',
    title: 'Quantum Physics',
    description: 'Explore the principles of quantum physics at the tertiary level.',
    category: 'Tertiary Student',
    location: 'Sham Shui Po',
  },
];

export const locations = [
  'Central and Western',
  'Eastern',
  'Southern',
  'Wan Chai',
  'Yau Tsim Mong',
  'Sham Shui Po',
  'Kowloon City',
  'Kwun Tong',
  'Wong Tai Sin',
  'Tsuen Wan',
  'Tuen Mun',
  'Yuen Long',
  'North District',
  'Sai Kung',
  'Islands',
  'Kwai Tsing',
  'Tai Po',
  'Sha Tin'
];

