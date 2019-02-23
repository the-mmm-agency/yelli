export const setIcons = icons =>
  icons.map(
    icon => `${icon.src.mediaLink} ${icon.sizes.replace(/x\d+/g, 'w')}`
  );
