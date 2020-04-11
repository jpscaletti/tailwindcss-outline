const plugin = require("tailwindcss/plugin");
const _ = require("lodash");

module.exports = plugin(function({ theme, addUtilities, variants }) {
	let newUtilities;

	newUtilities = {
		".outline": { outlineWidth: "1px" },
		".outline-2": { outlineWidth: "2px" },
		".outline-4": { outlineWidth: "4px" },
		".outline-8": { outlineWidth: "8px" },
	};
	addUtilities(newUtilities, variants("outlineWidth", ["responsive"]));

	newUtilities = {
		".outline-solid": { outlineStyle: "solid" },
		".outline-dashed": { outlineStyle: "dashed" },
		".outline-dotted": { outlineStyle: "dotted" },
		".outline-double": { outlineStyle: "double" },
	};
	addUtilities(newUtilities, variants("outlineStyle", ["responsive"]));

	newUtilities = {
		".outline-offset-1": { outlineOffset: "2px" },
		".outline-offset-2": { outlineOffset: "4px" },
		".outline-offset-3": { outlineOffset: "8px" },
		".outline-offset-4": { outlineOffset: "12px" },
		".-outline-offset-1": { outlineOffset: "-2px" },
		".-outline-offset-2": { outlineOffset: "-4px" },
		".-outline-offset-3": { outlineOffset: "-8px" },
		".-outline-offset-4": { outlineOffset: "-12px" },
	};
	addUtilities(newUtilities, variants("outlineOffset", ["responsive"]));

	newUtilities = {
		".outline-black": { outlineColor: theme("colors.black") },
		".outline-white": { outlineColor: theme("colors.white") },
	};
	const colors = _.omit(theme("colors"), ["transparent", "current", "black", "white"]);
	_.map(colors, (values, name) => {
		_.map(values, (value, modifier) => {
			newUtilities[`.outline-${name}-${modifier}`] = { outlineColor: value };
		});
	});

	addUtilities(newUtilities, variants("outlineColor", ["responsive"]));
});
