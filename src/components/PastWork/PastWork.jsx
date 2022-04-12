import { React, useState } from "react";

import PastWorkCart from "../PastWorkCart/PastWorkCart";

import "./PastWork.scss";

import PAST_WORKS_DATA from "./past-work.data";

export default function PastWork(props) {
	const [collection, setCollection] = useState(PAST_WORKS_DATA);

	return (
		<div className="past-work" id="PastWork" ref={props.propRef}>
			<h2>PastWorks</h2>
			<div className="projects">

				{
					collection.map(({id , ...otherCollectionProps})=>
						
						(<PastWorkCart key={id} {...otherCollectionProps} />)
					)
				}

				
			</div>
		</div>
	);
}
