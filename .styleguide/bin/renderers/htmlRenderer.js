const hljs = require('highlight.js');
const { Remarkable } = require('remarkable');

const renderParams = {
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {
        throw err;
      }
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {
      throw err;
    }
  }
};

const rendererPlugin = md => {
  const oldFenceFunc = md.renderer.rules.fence;

  md.renderer.rules.fence = (tokens, idx, options, env, instance) => {
    const htmlElementCode = tokens[idx].content;
    return htmlElementCode.concat(oldFenceFunc(tokens, idx, options, env, instance));
  };
};

const renderer = new Remarkable(renderParams);
renderer.use(rendererPlugin);

module.exports = renderer;
