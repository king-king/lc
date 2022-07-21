const UNICODE_MATCH_REG = /[^\x00-\xff]/g;

function pluginCreator(opts) {
    return {
        postcssPlugin: 'postcss-unicode',
        Declaration: {
            content: decl => {
                if (UNICODE_MATCH_REG.test(decl.value)) {
                    decl.value = decl.value.replace(UNICODE_MATCH_REG, m => `\\${m.charCodeAt(0).toString(16)}`);
                }
            }
        }
    };
}

pluginCreator.postcss = true;

module.exports = pluginCreator;
