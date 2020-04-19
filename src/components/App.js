import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../index.scss'
import '../index.css'
import Test from './sample/test'
export default function App() {
	return (
		<div className='container mt-2'>
			<BrowserRouter>
				<Switch>
					<Route
						path='/add'
						component={() => {
							return (
								<React.Fragment>
									header
									<br />
									<Switch>
										<Route component={() => 'This is path ---> /add/2'} path='/add/2' />
										<Route component={() => 'This is path ---> /add/1'} path='/add/1' />
										<Route component={() => 'This is path ---> /add'} />
									</Switch>
									<br />
									footer
								</React.Fragment>
							)
						}}
					/>
					<Route component={Test} path='/test' />
					<Route path='/' component={() => 'This is path ---> /'} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}
