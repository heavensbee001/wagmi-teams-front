import Layout, { siteTitle } from '../components/layout'
import { useRouter } from 'next/router'

export default function Jobs({ id }) {
	const router = useRouter()

	return (
		<section>
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
