import type { ComponentMeta } from '@storybook/react'

import DefaultPage from './DefaultPage'

export const generated = () => {
  return <DefaultPage />
}

export default {
  title: 'Pages/DefaultPage',
  component: DefaultPage,
} as ComponentMeta<typeof DefaultPage>
