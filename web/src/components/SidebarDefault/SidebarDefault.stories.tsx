// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SidebarDefault> = (args) => {
//   return <SidebarDefault {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SidebarDefault from './SidebarDefault'

export const generated = () => {
  return <SidebarDefault />
}

export default {
  title: 'Components/SidebarDefault',
  component: SidebarDefault,
} as ComponentMeta<typeof SidebarDefault>
