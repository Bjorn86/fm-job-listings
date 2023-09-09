import Stack from '../Stack/Stack';
import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'Badge variant',
    },
    colorScheme: {
      description: 'Badge color scheme',
    },
    text: {
      description: 'Badge text',
    },
  },
};

const Template = (args) => (
  <Stack>
    <Badge {...args} />
  </Stack>
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'basic',
  colorScheme: 'light',
  text: 'React',
};

export const Removable = Template.bind({});
Removable.args = {
  variant: 'removable',
  colorScheme: 'light',
  text: 'JavaScript',
};

export const RoundedPrimary = Template.bind({});
RoundedPrimary.args = {
  variant: 'rounded',
  colorScheme: 'primary',
  text: 'new!',
};

export const RoundedDark = Template.bind({});
RoundedDark.args = {
  variant: 'rounded',
  colorScheme: 'dark',
  text: 'featured',
};
