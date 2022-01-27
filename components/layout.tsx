import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

const name = '[Your Name]'
export const siteTitle = 'wagmi teams'

export default function Layout({ children, home }: { children: React.ReactNode; home?: boolean }) {
	return (
		<section className="w-screen bg-orange min-h-screen flex justify-center">
			<div className="w-full max-w-screen-md overflow-hidden">
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta name="description" content="Learn how to build a personal website using Next.js" />
					<meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
				</Head>

				<header>
					<div className="-mt-1.5 relative p-6">
						<p className={`${styles.marquee}`}>
							<span className="bg-font text-3xl text-purple">WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS //&nbsp;</span>
						</p>
						<p className={`${styles.marquee} ${styles.marquee2}`}>
							<span className="bg-font text-3xl text-purple">WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS //&nbsp;</span>
						</p>
					</div>
					{home ? null : (
						<div>
							<p>
								<Link href="/">{siteTitle.toUpperCase()}</Link>
							</p>
							<p>
								<Link href="/hackathons">HACKATHONS</Link>
							</p>
							<p>
								<Link href="/jobs">JOBS</Link>
							</p>
						</div>
					)}
				</header>

				<main>{children}</main>
			</div>
		</section>
	)
}
