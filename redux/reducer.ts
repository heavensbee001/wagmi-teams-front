export interface State {
	provider: any
	contract: any
	currentAccount: string
}
export interface Action {
	type: '' | 'SET_PROVIDER' | 'SET_CONTRACT' | 'SET_CURRENT_ACCOUNT'
	payload?: any
}

const initialState = () => ({
	provider: null,
	contract: null,
	currentAccount: '',
})

const reducer = (state: State = initialState(), action: Action = { type: '' }): State => {
	if (action.type === 'SET_PROVIDER') {
		return { ...state, provider: action.payload }
	}
	if (action.type === 'SET_CONTRACT') {
		return { ...state, contract: action.payload }
	}
	if (action.type === 'SET_CURRENT_ACCOUNT') {
		return { ...state, currentAccount: action.payload }
	}
	return state
}

export default reducer
