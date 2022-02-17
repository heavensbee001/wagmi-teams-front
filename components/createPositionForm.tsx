import { FC, Fragment, useState, useContext } from 'react'
import { StoreContext } from '../pages/_app'
import ConnectWalletButton from './connectWalletButton'

const CreatePositionForm: FC<any> = () => {
	const storeContext = useContext(StoreContext)
	const [createFormActive, setCreateFormActive] = useState(false)

	const handleClickAddPosition = () => {
		setCreateFormActive(!createFormActive)
	}

	return (
		<Fragment>
			{createFormActive && <section className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={handleClickAddPosition}></section>}
			<section className={`fixed bottom-0 w-full max-w-screen-md bg-white h-0 z-10 transition-[height] ease-in-out duration-200 ${createFormActive ? 'h-4/6 p-4 pb-10' : ''}`}>
				<button className={`absolute -top-16 right-0 w-16 h-16 text-white text-4xl font-black ${createFormActive ? 'bg-black' : 'bg-green'}`} onClick={handleClickAddPosition}>
					<span className={`block ${createFormActive ? 'rotate-45 translate-x-1' : ''}`}>+</span>
				</button>
				{storeContext.state.currentAccount ? (
					<form>
						<input id="companyName" type="text" placeholder="Company Name" required className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
						<input id="positionTitle" type="text" placeholder="Position Title" required className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
						<textarea id="description" placeholder="Description" required maxLength={280} className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
						<input id="positionUrl" type="text" placeholder="Position url" required className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
						<input id="contact" type="text" placeholder="contact" required className="border-b-2 border-b-black w-full mb-4 py-2 placeholder-black" />
						<div className="w-full text-right">
							<button type="submit" className="px-4 py-2 bg-green text-white">
								Add position
							</button>
						</div>
					</form>
				) : (
					<ConnectWalletButton />
				)}
			</section>
		</Fragment>
	)
}

export default CreatePositionForm
