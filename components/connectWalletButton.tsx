import { FC, useEffect, useContext } from 'react'
import { ethers } from 'ethers'
import { StoreContext } from '../pages/_app'

import abi from '../utils/WagmiTeams.json'

const contractAddress = '0x66d7C953CCE63e14a01c5C849A32460E9D5b7aAe'
const contractAbi = abi.abi

const ConnectWalletButton: FC = () => {
	const storeContext = useContext(StoreContext)

	// set alchemy provider if MM is not connected
	useEffect(() => {
		storeContext.dispatch({ type: 'SET_PROVIDER', payload: new ethers.providers.AlchemyProvider('maticmum', process.env.ALCHEMY_KEY) })
	}, [])

	// set contract when a provider is set
	useEffect(() => {
		if (!storeContext.state.provider) {
			return
		}
		if (storeContext.state.provider.connection.url.includes('polygon')) {
			storeContext.dispatch({ type: 'SET_CONTRACT', payload: new ethers.Contract(contractAddress, contractAbi, storeContext.state.provider) })
		} else if (storeContext.state.provider.connection.url === 'metamask') {
			storeContext.dispatch({ type: 'SET_CONTRACT', payload: new ethers.Contract(contractAddress, contractAbi, new ethers.providers.Web3Provider(window.ethereum).getSigner()) })
		}
	}, [storeContext.state.provider])

	const handleClick = () => {
		if (!window.ethereum) {
			alert('Get MetaMask!')
			return
		}

		connectToMetamask()
	}

	const connectToMetamask = async () => {
		try {
			// set provider to mm
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
			storeContext.dispatch({ type: 'SET_PROVIDER', payload: new ethers.providers.Web3Provider(window.ethereum) })

			console.log('Connected', accounts[0])
			storeContext.dispatch({ type: 'SET_CURRENT_ACCOUNT', payload: accounts[0] })
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={`relative z-10 bg-white w-full text-green flex justify-center cursor-pointer h-10 transition-[height] ease-in-out duration-200 ${storeContext.state.currentAccount ? 'h-0 overflow-hidden' : ''}`} onClick={handleClick}>
			<span className="pt-2">Connect Metamask wallet! 🦊</span>
		</div>
	)
}

export default ConnectWalletButton
