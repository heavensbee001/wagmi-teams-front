import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<div>
				<section className="mt-24 mb-32">
					<h2 className="bg-font text-5xl leading-snug tracking-wider">
						TEAM UP
						<br />
						WITH AMAZING
						<br />
						PEOPLE
					</h2>
				</section>
				<section className="bv-font text-4xl text-white">
					<p>
						<Link href="/hackathons" passHref>
							<div className="group mb-4 tracking-wide font-extralight">
								<span className="group-hover:tracking-widest group-hover:underline group-hover:italic group-hover:cursor-pointer">hackathons</span>
								<span className="text-3xl pl-8 group-hover:cursor-pointer group-hover:pl-10">⟶</span>
							</div>
						</Link>
					</p>
					<p>
						<Link href="/jobs" passHref>
							<div className="group mb-4 tracking-wide font-extralight">
								<span className="group-hover:tracking-widest group-hover:underline group-hover:italic group-hover:cursor-pointer">jobs</span>
								<span className="text-3xl pl-8 hover:cursor-pointer group-hover:pl-10">⟶</span>
							</div>
						</Link>
					</p>
				</section>
			</div>
		</Layout>
	)
}
