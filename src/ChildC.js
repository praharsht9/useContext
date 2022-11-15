import React, { useContext } from 'react';
import { data, data1 } from './App';

const ChildC = () => {
	const FirstName = useContext(data);
	const gender = useContext(data1);
	return (
		<div>
			<h1>
				Child C: Hi My name is {FirstName} and my gender is {gender}
			</h1>
		</div>
	);
};

export default ChildC;
