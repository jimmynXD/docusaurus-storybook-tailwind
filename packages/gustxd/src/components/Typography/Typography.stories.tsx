import { Meta, Story } from "@storybook/react"
import React from "react"

import { Typography, TypographyProps } from "."

const meta: Meta = {
  title: "React/Typography",
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story<TypographyProps> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {}
