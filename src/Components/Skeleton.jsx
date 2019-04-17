import React, { memo } from 'react';
import LoadingSkeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { useDarkTheme } from 'Themes/ThemeProvider';

const colors = {
  color: {
    dark: '#3c4361',
    light: '#dadada'
  },
  highlightColor: {
    dark: '#212337',
    light: '#efefef'
  }
};

const Skeleton = memo(props => {
  const { dark } = useDarkTheme();
  const getSkeletonColor = type => colors[type][dark ? 'dark' : 'light'];
  return (
    <SkeletonTheme
      color={() => getSkeletonColor('color')}
      highlightColor={() => getSkeletonColor('highlightColor')}
    >
      <LoadingSkeleton {...props} />
    </SkeletonTheme>
  );
});

export default Skeleton;
