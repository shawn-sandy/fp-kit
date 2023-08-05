import React from 'react';

function Keyboard_arrow_up(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fill="none">
		<path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z" fill={fill}/>
	</g>
</svg>
	);
};

export default Keyboard_arrow_up;