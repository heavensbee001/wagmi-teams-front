import { useContext } from 'react'
import { useRouter } from 'next/router'
import { StoreContext } from './_app'

export default function Jobs({ id }) {
	const router = useRouter()
	const storeContext = useContext(StoreContext)

	return (
		<section>
			<div className={`h-10 transition-[height] ease-in-out duration-200 ${storeContext.state.currentAccount ? 'h-0 overflow-hidden' : ''}`}></div>
			<h2 className="text-5xl bv-font text-white italic font-bold tracking-wide">{id}</h2>
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
