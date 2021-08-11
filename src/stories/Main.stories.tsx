import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Main } from '@/components/Main'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Default: Story = (args) => <Main {...args} />
