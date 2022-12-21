import React from "react";
import { FirstStack } from "../component/FirstStack/FirstStack";
import { FourthStack } from "../component/FourthStack/FourthStack";
import { SecondStack } from "../component/SecondStack/SecondStack";
import { ThirdStack } from "../component/ThirdStack/ThirdStack";


const ItemsList = () => {

	return (
		<div style={{
			display: 'flex',
			justifyContent: 'space-between',
			marginTop: '2rem'
		}}>
			<FirstStack/>
			<SecondStack/>
			<ThirdStack/>
			<FourthStack/>
		</div>
	);
};

export default ItemsList;