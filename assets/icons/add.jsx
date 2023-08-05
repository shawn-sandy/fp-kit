import React from 'react';

function Add(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fill="none">
		<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill={fill}/>
	</g>
</svg>
	);
};

export default Add;