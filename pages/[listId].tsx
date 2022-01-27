import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { useRouter } from 'next/router'

export default function Jobs() {
	const router = useRouter()

	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p>Dynamic page</p>
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

export async function getStaticProps() {
	return { props: {} }
}
