import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../index.scss'
import '../index.css'

//import Test from './sample/test'
//Testing Lazy Loading

const Test = lazy(() => import('./sample/test'))

export default function App() {
	function WaitingComponent(Component) {
		return props => (
			<Suspense fallback={<div>Loading...</div>}>
				<Component {...props} />
			</Suspense>
		)
	}

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
					<Route component={WaitingComponent(Test)} path='/test' />
					<Route path='/' component={() => 'This is path ---> /'} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}
