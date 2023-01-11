import figma from './figma'
import { Meta } from '@storybook/react'
import { CSSProperties } from "react";
import { viewportKeys } from "./viewport";

export type StoriesExportParams = Meta & {
  figmaId?: string
  containerStyle?: CSSProperties
  viewport?: string | null
}

export default ({ figmaId, containerStyle, viewport = viewportKeys.MobileSmall, parameters = {}, ...rest }: StoriesExportParams) => ({
  parameters: {
    ...figma(figmaId),
    containerStyle,
    viewport: {
      defaultViewport: viewport || viewportKeys.default
    },
    ...parameters,
  },
  ...rest
})