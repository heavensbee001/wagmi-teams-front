import { ButtonHTMLAttributes, Dispatch, FC, SetStateAction, useEffect, useState, useMemo } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import abi from '../utils/WagmiTeams.json'
import { sign } from 'crypto'
import { json } from 'stream/consumers'

const contractAddress = '0x66d7C953CCE63e14a01c5C849A32460E9D5b7aAe'
const contractAbi = abi.abi

const ConnectWalletButton: FC = () => {
	const [provider, setProvider] = useState(null)
	const [contract, setContract] = useState(null)
	const [currentAccount, setCurrentAccount] = useState('')

	// set alchemy provider if MM is not connected
	useEffect(() => {
		setProvider(new ethers.providers.AlchemyProvider('maticmum', process.env.ALCHEMY_KEY))
	}, [])

	// set contract when a provider is set
	useEffect(() => {
		if (!provider) {
			return
		}
		setContract(new ethers.Contract(contractAddress, contractAbi, provider))
	}, [provider])

	const handleClick = () => {
		if (!window.ethereum) {
			alert('Get MetaMask!')
			return
		}

		// set provider to mm
		setProvider(new ethers.providers.Web3Provider(window.ethereum))
		connectToMetamask()
	}

	const connectToMetamask = async () => {
		try {
			const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

			console.log('Connected', accounts[0])
			setCurrentAccount(accounts[0])
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className={`relative z-10 bg-white w-full text-green flex justify-center cursor-pointer h-10 transition-[height] ease-in-out duration-200 ${currentAccount ? 'h-0 overflow-hidden' : ''}`} onClick={handleClick}>
			<span className="pt-2">Connect Metamask wallet! 🦊</span>
		</div>
	)
}

export default ConnectWalletButton
