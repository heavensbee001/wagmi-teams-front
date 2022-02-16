import { FC, useEffect, useReducer } from 'react'
import { ethers } from 'ethers'
import abi from '../utils/WagmiTeams.json'
import reducer, { State, Action } from '../redux/reducer'
import { Dispatch } from 'react'

const contractAddress = '0x66d7C953CCE63e14a01c5C849A32460E9D5b7aAe'
const contractAbi = abi.abi

const ConnectWalletButton: FC = () => {
	const [state, dispatch]: [State, Dispatch<Action>] = useReducer(reducer, reducer())

	// set alchemy provider if MM is not connected
	useEffect(() => {
		dispatch({ type: 'SET_PROVIDER', payload: new ethers.providers.AlchemyProvider('maticmum', process.env.ALCHEMY_KEY) })
	}, [])

	// set contract when a provider is set
	useEffect(() => {
		if (!state.provider) {
			return
		}
		dispatch({ type: 'SET_CONTRACT', payload: new ethers.Contract(contractAddress, contractAbi, state.provider) })
	}, [state.provider])

	const handleClick = () => {
		if (!window.ethereum) {
			alert('Get MetaMask!')
			return
		}

		// set provider to mm
		dispatch({ type: 'SET_PROVIDER', payload: new ethers.providers.Web3Provider(window.ethereum) })
		connectToMetamask()
	}

	const connectToMetamask = async () => {
		try {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

			console.log('Connected', accounts[0])
			dispatch({ type: 'SET_CURRENT_ACCOUNT', payload: accounts[0] })
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={`relative z-10 bg-white w-full text-green flex justify-center cursor-pointer h-10 transition-[height] ease-in-out duration-200 ${state.currentAccount ? 'h-0 overflow-hidden' : ''}`} onClick={handleClick}>
			<span className="pt-2">Connect Metamask wallet! 🦊</span>
		</div>
	)
}

export default ConnectWalletButton
