export const getFloatingCatText = (activeElement: string, targets: string[], floatingCatTexts: string[]): string => {
  if (!activeElement || !targets || !floatingCatTexts) {
    return
  }
  const activeIndex = targets.findIndex(target => target === activeElement)
  return floatingCatTexts[activeIndex]
}
