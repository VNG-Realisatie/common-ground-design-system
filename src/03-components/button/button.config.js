const variants = [
	'primary',
	'secondary',
	'outline-primary',
	'outline-secondary',
	'sm',
	'lg',
];

// Only visible with one of the above variants
const coVariants = [
];

let variantsContext = variants.map(c => {
	return {
		name: c,
		context: {
			modifiers: [c]
		}
	};
});

variantsContext = variantsContext.concat(coVariants.map(c => {
	return {
		name: c,
		context: {
			modifiers: [c]
		}
	};
}));

module.exports = {
	title: 'Button',
	status: 'ready',
	context: {
		label: 'Button',
		to: '#'
	},
	variants: variantsContext
};
