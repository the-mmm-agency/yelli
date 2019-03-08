export const setIcons = icons =>
  icons
    .reverse()
    .map(icon => `${icon.src.mediaLink} ${icon.sizes.replace(/x\d+/g, 'w')}`);
