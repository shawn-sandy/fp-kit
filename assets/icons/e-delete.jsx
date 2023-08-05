import React from 'react';

function EDelete(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M11,7H1A1,1,0,0,1,1,5H11a1,1,0,0,1,0,2Z" fill={fill}/>
	</g>
</svg>
	);
};

export default EDelete;