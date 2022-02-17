import React, { Dispatch, useEffect, useReducer } from 'react'
import { AppProps } from 'next/app'
import Layout from '../components/layout'
import reducer, { State, Action } from '../redux/reducer'

import '/styles/globals.css'

export const StoreContext = React.createContext({ state: null, dispatch: null })

function App({ Component, pageProps }: AppProps) {
	const [state, dispatch]: [State, Dispatch<Action>] = useReducer(reducer, reducer())

	return (
		<StoreContext.Provider value={{ state, dispatch }}>
			<Layout {...pageProps}>
				<Component {...pageProps} />
			</Layout>
		</StoreContext.Provider>
	)
}

export default App
