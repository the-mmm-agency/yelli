import React, { useRef, cloneElement, useEffect } from 'react';
import elasticScroll from 'elastic-scroll-polyfill';

const ElasticScroll = ({ children, ...props }) => {
  const targetRef = useRef();

  useEffect(() => {
    const instance = elasticScroll({
      appleDevicesOnly: false,
      targets: targetRef.current,
      useNative: true,
      ...props
    });

    return () => {
      instance.disable();
    };
  }, []);

  return cloneElement(children, {
    children: <div data-elastic-wrapper>{children.props.children}</div>,
    ref: node => {
      targetRef.current = node;
      const { ref } = children;
      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
          // eslint-disable-next-line no-prototype-builtins
        } else if (ref.hasOwnProperty('current')) {
          ref.current = node;
        }
      }
    }
  });
};

export default ElasticScroll;
