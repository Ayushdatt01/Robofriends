import React from 'react';


const Card = (props,) => {
	const{name,id, email} = props // We can add this line in parameter section as well and can ignore props
return (

	<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
	<img alt ="robot" src={`https://robohash.org/${id}?200*200`} />
	<div>
	  <h2>{name}</h2>
	  <p>{email}</p>
	</div>  
</div>
	);
}

export default Card;