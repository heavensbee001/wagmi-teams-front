import { useContext, useState } from 'react'
import { useRouter } from 'next/router'
import { StoreContext } from './_app'
import { useEffect } from 'react'
import PositionCard from '../components/positionCard'

export default function Jobs({ id }) {
	const router = useRouter()
	const storeContext = useContext(StoreContext)

	const [positions, setPositions] = useState([])

	useEffect(() => {
		const getCurrentPagePositions = async () => {
			const currentPagePositions = await storeContext.state.contract?.getPaginatedPositions(0, 1, 20)
			if (currentPagePositions) {
				setPositions([...positions, ...currentPagePositions])
			}
		}

		getCurrentPagePositions()
	}, [storeContext.state.contract])

	//@TODO this mock call is working, it has to be removed
	const sendPosition = async () => {
		const txn = await storeContext.state.contract?.sendPosition(0, {
			title: 'title1',
			projectOrCompanyName: 'projectName',
			projectOrCompanyImageUrl: 'projectOrCompanyImageUrl.jpg',
			description: 'description1',
			positionOfferUrl: 'positionOfferUrl.com',
			contact: '@_eloigil',
			createdAt: Date.now().toString(),
		})
		await txn.wait()
		console.log(txn.hash)
	}

	return (
		<section>
			<div className={`h-10 transition-[height] ease-in-out duration-200 ${storeContext.state.currentAccount ? 'h-0 overflow-hidden' : ''}`}></div>
			<h2 className="px-2 text-5xl bv-font text-white italic font-bold tracking-wide">{id}</h2>
			<ul>
				{positions.map((position, index) => (
					<PositionCard position={position} key={index} />
				))}
			</ul>
		</section>
	)
}

export async function getStaticPaths() {
	return {
		paths: [{ params: { listId: 'hackathons' } }, { params: { listId: 'jobs' } }],
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	return { props: { id: params.listId } }
}
