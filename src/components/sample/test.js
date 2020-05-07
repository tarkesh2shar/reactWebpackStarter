import React from 'react'
import './index.scss'
import Image from '../../../assets/1.jpg'

export default function Test() {
	return (
		<React.Fragment>
			<div className='test__flex'>Test Here</div>
			<img src={Image} alt='' height={100} width={100} srcset='' />
		</React.Fragment>
	)
}
