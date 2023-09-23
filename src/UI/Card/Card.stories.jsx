import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    company: {
      description: 'Company name',
    },
    logo: {
      description:
        'URL to Company logo. The path should take into account that the image is located in the public directory',
    },
    new: {
      description: 'Is this a new vacancy?',
    },
    featured: {
      description: 'Is this a featured vacancy?',
    },
    position: {
      description: 'Position name',
    },
    role: {
      description: 'Role name',
    },
    level: {
      description: 'Position level',
    },
    postedAt: {
      description: 'Date of publication',
    },
    contract: {
      description: 'Contract type',
    },
    location: {
      description: 'Location of the vacancy',
    },
    languages: {
      description: 'List of programming languages',
    },
    tools: {
      description: 'The list of tools needed in the work',
    },
    addFilter: {
      description: 'Callback for adding a filter',
    },
  },
};

const Template = (args) => (
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <Card {...args} />
  </ul>
);

export const Basic = Template.bind({});
Basic.args = {
  company: 'Account',
  logo: '/images/account.svg',
  new: true,
  featured: false,
  position: 'Junior Frontend Developer',
  role: 'Frontend',
  level: 'Junior',
  postedAt: '2d ago',
  contract: 'Part Time',
  location: 'USA Only',
  languages: ['JavaScript'],
  tools: ['React', 'Sass'],
  addFilter: () => {},
};

export const Featured = Template.bind({});
Featured.args = {
  company: 'Manage',
  logo: '/images/manage.svg',
  new: true,
  featured: true,
  position: 'Fullstack Developer',
  role: 'Fullstack',
  level: 'Midweight',
  postedAt: '1d ago',
  contract: 'Part Time',
  location: 'Remote',
  languages: ['Python'],
  tools: ['React'],
  addFilter: () => {},
};
