import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>

			<section>
				<h2 className="bg-font text-5xl leading-snug tracking-wider">
					TEAM UP
					<br />
					WITH AMAZING
					<br />
					PEOPLE
				</h2>
			</section>
			<section className="bv-font text-3xl text-white">
				<p>
					<Link href="/hackathons" passHref>
						<div className="group">
							<span className="group-hover:underline group-hover:italic group-hover:cursor-pointer">hackathons</span>
							<span className="pl-6 group-hover:cursor-pointer group-hover:pl-8">→</span>
						</div>
					</Link>
				</p>
				<p>
					<Link href="/jobs" passHref>
						<div className="group">
							<span className="group-hover:underline group-hover:italic group-hover:cursor-pointer">jobs</span>
							<span className="pl-6 hover:cursor-pointer group-hover:pl-8">→</span>
						</div>
					</Link>
				</p>
			</section>
		</Layout>
	)
}
