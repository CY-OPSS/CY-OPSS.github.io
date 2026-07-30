/* global hexo */

'use strict';

const path = require('path');

// Add comment
hexo.extend.filter.register('theme_inject', injects => {
  const theme = hexo.theme.config;
  if (!theme.twikoo.enable) return;

  injects.comment.raw('twikoo', '<div id="tcomment"></div>', {}, { cache: true });

  injects.bodyEnd.file('twikoo', path.join(hexo.theme_dir, 'layout/_third-party/comments/twikoo.njk'));

});
