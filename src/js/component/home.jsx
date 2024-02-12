import React, {useState} from "react";
import Lights from "./Lights";


//create your first component
const Home = ()=>{

return (
	<div className="position-absolute top-50 start-50 translate-middle">
		<div>
			<div className="position-absolute bottom-0 start-50 translate-middle" style={{backgroundColor: "red", width: "1rem", height: "10rem"}}></div>
			<div className="position-absolute top-50 start-50 translate-middle" style={{backgroundColor: "black", width: "5rem", height: "13rem"}}>
			<Lights />
			</div>

		</div>
			
	</div>
)


};

export default Home;
