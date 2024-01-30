import React, { createRef, useEffect, useRef } from 'react';
import { getValueFromLocalStorage } from '../../utils/localStorage';

const src = 'https://giscus.app/client.js';

function Giscus({ repo, repoId, categoryId, path }) {
  const rootElm = createRef();
  const isGiscusLoaded = useRef(false);

  const loadGiscus = (theme) => {
    if (isGiscusLoaded.current) {
      const existingGiscus = rootElm.current.querySelector('.giscus');
      if (existingGiscus) {
        rootElm.current.removeChild(existingGiscus);
      }

      const giscus = document.createElement('script');
      const giscusConfig = {
        src,
        'data-repo': repo,
        'data-repo-id': repoId,
        'data-category': 'Comments',
        'data-category-id': categoryId,
        'data-mapping': 'pathname',
        'data-strict': '0',
        'data-reactions-enabled': '1',
        'data-emit-metadata': '0',
        'data-input-position': 'bottom',
        'data-theme': theme,
        'data-lang': 'ko',
        crossorigin: 'anonymous',
        async: true,
      };

      Object.keys(giscusConfig).forEach((configKey) => {
        giscus.setAttribute(configKey, giscusConfig[configKey]);
      });

      rootElm.current.appendChild(giscus);
    }
  };

  useEffect(() => {
    if (!rootElm.current || isGiscusLoaded.current) return;

    const storedIsDarkMode = getValueFromLocalStorage('isDarkMode');
    const theme = storedIsDarkMode ? 'dark' : 'light';

    loadGiscus(theme);
    isGiscusLoaded.current = true;

    const themeChangeListener = () => {
      const newTheme = getValueFromLocalStorage('isDarkMode') ? 'dark' : 'light';
      loadGiscus(newTheme);
    };

    window.addEventListener('theme', themeChangeListener);

    return () => {
      window.removeEventListener('theme', themeChangeListener);
    };
  }, [repo, repoId, categoryId, rootElm, path]);

  return <div className="giscus" ref={rootElm} />;
}

export default Giscus;
