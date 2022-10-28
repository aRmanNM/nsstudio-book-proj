const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	// related issue: https://github.com/nstudio/nativescript-audio/issues/131#issuecomment-495559372
	// TODO: maybe add your findings on another issue
	webpack.Utils.addCopyRule('**/*.mp3')

	// Learn how to customize:
	// https://docs.nativescript.org/webpack

	return webpack.resolveConfig();
};


