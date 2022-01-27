import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

const name = '[Your Name]'
export const siteTitle = 'wagmi teams'

export default function Layout({ children, home, page }: { children: React.ReactNode; home?: boolean; page?: string }) {
	return (
		<section className="w-screen bg-orange min-h-screen flex justify-center">
			<div className="w-full max-w-screen-md">
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta name="description" content="Learn how to build a personal website using Next.js" />
					<meta property="og:image" content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`} />
					<meta name="og:title" content={siteTitle} />
					<meta name="twitter:card" content="summary_large_image" />
					<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
				</Head>

				<div className="pt-12"></div>
				<header className="absolute w-full left-0 top-0 overflow-hidden">
					<Link href="/" passHref>
						<div className="-mt-1.5 relative p-6 hover:cursor-pointer">
							<p className={`${styles.marquee}`}>
								<span className="bg-font text-5xl text-purple">WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS //&nbsp;</span>
							</p>
							<p className={`${styles.marquee} ${styles.marquee2}`}>
								<span className="bg-font text-5xl text-purple">WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS // WAGMI TEAMS //&nbsp;</span>
							</p>
						</div>
					</Link>
					{page === 'hackathons' && (
						<Link href="/jobs">
							<div className="fixed top-0 right-2 text-white bg-black px-6 pt-2 pb-4 -translate-x-9 origin-top-right -rotate-90 hover:cursor-pointer">
								<p>jobs</p>
							</div>
						</Link>
					)}

					{page === 'jobs' && (
						<Link href="/hackathons" passHref>
							<div className="fixed top-0 right-2 text-white bg-black px-6 pt-2 pb-4 -translate-x-9 origin-top-right -rotate-90 hover:cursor-pointer">
								<p>hackathons</p>
							</div>
						</Link>
					)}
				</header>

				<main className="px-2 py-4">{children}</main>
			</div>
			<footer className="absolute bottom-0 w-full bg-black text-white bv-font text-center">
				<p>
					made by&nbsp;
					<a className="hover:underline hover:italic hover:cursor-pointer" href="http://twitter.com/_eloigil" target="_blank" rel="noopener noreferrer">
						@_eloigil
					</a>
				</p>
			</footer>
		</section>
	)
}
