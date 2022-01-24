import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Hackathons() {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p>This is a sample website</p>
			</section>
		</Layout>
	)
}
