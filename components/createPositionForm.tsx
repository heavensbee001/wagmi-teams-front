import { FC, Fragment, useState, useContext, useReducer } from 'react'
import { StoreContext } from '../pages/_app'
import ConnectWalletButton from './connectWalletButton'

const formReducer = (state, event) => {
	return {
		...state,
		[event.target.name]: event.target.value,
	}
}

const CreatePositionForm: FC<any> = () => {
	const storeContext = useContext(StoreContext)
	const [createFormActive, setCreateFormActive] = useState(false)
	const [formData, setFormData] = useReducer(formReducer, {})
	const [loading, setLoading] = useState(false)

	const handleClickAddPosition = () => {
		setCreateFormActive(!createFormActive)
	}

	const handleInputWheel = e => {
		e.target.blur()
	}

	const handleSubmit = e => {
		e.preventDefault()
		sendPosition()
	}

	const sendPosition = async () => {
		try {
			const txn = await storeContext.state.contract?.sendPosition(0, {
				title: formData.positionTitle,
				projectOrCompanyName: formData.companyName,
				description: formData.description,
				positionOfferUrl: formData.positionUrl,
				contact: formData.contact,
				projectOrCompanyImageUrl: '',
				createdAt: Date.now().toString(),
			})
			setLoading(true)
			await txn.wait()
			console.log(txn.hash)
			setLoading(false)
		} catch (error) {
			setLoading(false)
			console.log(error)
		}
	}

	return (
		<Fragment>
			{createFormActive && <section className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={handleClickAddPosition}></section>}
			<section className={`fixed bottom-0 w-full max-w-screen-md bg-white h-0 z-10 transition-[height] ease-in-out duration-200 ${createFormActive ? 'h-4/6' : ''}`}>
				<button className={`absolute -top-16 right-0 w-16 h-16 text-white text-4xl font-black ${createFormActive ? 'bg-black' : 'bg-green'}`} onClick={handleClickAddPosition}>
					<span className={`block ${createFormActive ? 'rotate-45 translate-x-1' : ''}`}>+</span>
				</button>
				<div className="overflow-y-scroll top-0 left-0 w-full h-full p-4 pb-8">
					{storeContext.state.currentAccount ? (
						<form onSubmit={handleSubmit}>
							<input name="companyName" type="text" placeholder="Company Name*" required onChange={setFormData} className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
							<input name="positionTitle" type="text" placeholder="Position Title*" required onChange={setFormData} className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
							<textarea name="description" placeholder="Description*" required maxLength={280} onChange={setFormData} className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
							<input name="positionUrl" type="text" placeholder="Position url" required onChange={setFormData} className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
							<input name="contact" type="text" placeholder="contact" required onChange={setFormData} className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
							<label htmlFor="tipCreator" className="mr-2">
								Tip creator
							</label>
							<input name="tipCreator" type="number" placeholder="0" onChange={setFormData} className="border-b-2 border-b-black mb-4 py-2 pr-10 placeholder-black text-right appearance-none" onWheel={handleInputWheel} />
							<img src="/polygon-matic-logo.svg" width={30} alt="MATIC" className="inline-block -ml-8 mb-1" />
							<span className="ml-2">MATIC</span>
							<div className="w-full text-right">
								<button type="submit" className="px-4 py-2 bg-green text-white">
									Add position
								</button>
							</div>
						</form>
					) : (
						<ConnectWalletButton />
					)}
				</div>
			</section>
		</Fragment>
	)
}

export default CreatePositionForm
