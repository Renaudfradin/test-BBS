const figmaId = 'SyOsfGS8gnoo5LO4XZOuHN/Big-Boss-Website'

const figmaBaseUrl = `https://www.figma.com/file/${figmaId}`

const figmaUrl = (nodeId: string): string => {
  if (nodeId) {
    return `${figmaBaseUrl}?node-id=${nodeId}`
  }

  return figmaBaseUrl
}

export default (nodeId?: string) => {
  return {
    design: nodeId ? {
      type: 'figma',
      url: figmaUrl(nodeId),
    } : {
      disable: true,
    }
  }
}
