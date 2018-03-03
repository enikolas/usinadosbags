module.exports = {
	"root": true,
	"extends": ["airbnb", "plugin:jest/recommended"],
	"rules": {
		/*
		The default of it is alignment with 4 spaces for code and 2 spaces 
		for JSX, we override it all for tabs
		*/
		"indent": ["error", "tab"],
		"no-tabs": "off",
		"react/jsx-indent": ["error", "tab"],
		"react/jsx-indent-props": ["error", "tab"],
		/*
		This one doesn't allow extra lines between function definition and code, 
		we override it because it makes the code look a bit dirtier
		*/
		"padded-blocks": "off",
		/*
		They don't like functions like _privateFn(), but we do, so we override it
		*/
		"no-underscore-dangle": "off",
		/*
		Webpack 4.0.1 dislikes .jsx extensions
		*/
		"react/jsx-filename-extension": "off",
		/*
		comma-dangle enforces things like [1, 2, 3,] which are pretty strange, 
		so we invert the default
		*/
		"comma-dangle": ["error", "never"],
		/*
		Our Link tag has the "to" parameter, instead of href.
		For some reason it complains about it, so we override it
		*/
		"jsx-a11y/anchor-is-valid": [ "error", {
			"components": [ "Link" ],
			"specialLink": [ "to" ]
		}],
		/*
		It doesn't allow propTypes array and object with no further specifications, 
		but sometimes we don't have those at hand
		*/
		"react/forbid-prop-types": "off"
	}
}
