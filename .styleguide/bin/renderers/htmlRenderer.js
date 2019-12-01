const fs = require('fs');
const path = require('path');
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
  const fenceFunc = md.renderer.rules.fence;

  md.renderer.rules.fence = (tokens, idx, options, env, instance) => {
    const isCSS = tokens[idx].params === 'css';
    const codeContent = tokens[idx].content;
    const tokensContentHeader = `
  /* 
    -----------------------------------------------------------
    DO NOT CHANGE! FILE WAS GENERATED AUTOMATICALLY FROM TOKENS.MD!
    -----------------------------------------------------------
  */
   `;

    if (isCSS) {
      fs.writeFile(
        path.resolve(__dirname, '../../..', 'assets/css/tokens.css'),
        tokensContentHeader.concat(codeContent),
        err => {
          if (err) throw err;
        }
      );

      return fenceFunc(tokens, idx, options, env, instance);
    }

    return codeContent.concat(fenceFunc(tokens, idx, options, env, instance));
  };
};

const renderer = new Remarkable(renderParams);
renderer.use(rendererPlugin);

module.exports = renderer;
