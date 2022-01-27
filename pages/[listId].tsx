import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { useRouter } from 'next/router'

export default function Jobs({ id }) {
	const router = useRouter()

	return (
		<Layout page={id}>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p>{id}</p>
			</section>
		</Layout>
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
