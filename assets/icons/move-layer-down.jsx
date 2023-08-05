import React from 'react';

function MoveLayerDown(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill}>
		<path d="M14,14H2a1,1,0,0,0,0,2H14a1,1,0,0,0,0-2Z"/>
		<path d="M7.293,11.707a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414L9,8.586V1A1,1,0,0,0,7,1V8.586L3.707,5.293A1,1,0,0,0,2.293,6.707Z" fill={fill}/>
	</g>
</svg>
	);
};

export default MoveLayerDown;