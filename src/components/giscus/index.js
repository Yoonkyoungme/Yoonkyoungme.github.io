import React, { createRef, useEffect, useRef } from 'react';

const src = 'https://giscus.app/client.js';

function Giscus({ repo, repoId, categoryId, path }) {
  const rootElm = createRef();
  const isGiscusLoaded = useRef(false);

  useEffect(() => {
    if (!rootElm.current || isGiscusLoaded.current) return;
    const storedIsDarkMode = localStorage.getItem('isDarkMode');

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
      'data-theme': JSON.parse(storedIsDarkMode) ? 'dark' : 'light',
      'data-lang': 'ko',
      crossorigin: 'anonymous',
      async: true,
    };

    Object.keys(giscusConfig).forEach((configKey) => {
      giscus.setAttribute(configKey, giscusConfig[configKey]);
    });
    rootElm.current.appendChild(giscus);
    isGiscusLoaded.current = true;
  }, [repo, repoId, categoryId, rootElm, path]);

  return <div className="giscus" ref={rootElm} />;
}

export default Giscus;
