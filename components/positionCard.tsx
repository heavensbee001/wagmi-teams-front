import { ComponentType, FC } from 'react'
import dynamic from 'next/dynamic'

type LetteredAvatarProps = {
	name: string
	radius: number
}

const LetteredAvatar: ComponentType<LetteredAvatarProps> = dynamic(
	import('react-lettered-avatar').then(module => {
		console.log(module)
		console.log(module.default)
		return module.default
	}),
	{
		ssr: false,
	}
)

//@TODO: create a global type for position
type Props = {
	position: {
		title: string
		projectOrCompanyName: string
		projectOrCompanyImageUrl: string
		description: string
		positionOfferUrl: string
		contact: string
		createdAt: string
	}
}

const PositionCard: FC<Props> = ({ position }) => {
	return (
		<li className="relative pt-6 mb-4">
			{LetteredAvatar && (
				<div className="absolute top-0 w-16">
					<LetteredAvatar name={position.projectOrCompanyName[0]} radius={0} />
				</div>
			)}
			{/* <img src="https://via.placeholder.com/150" className="absolute top-0 w-16" alt={position.projectOrCompanyName} /> */}
			<div className="bg-white ml-5 py-2 px-4">
				<h4 className="ml-8 mb-2">
					<span className="bg-font">{position.title}</span>
					<span className="bv-font"> @ {position.projectOrCompanyName}</span>
				</h4>

				<p className="text-sm">{position.description}</p>

				{position.positionOfferUrl ? (
					<a target="_blank" href={position.positionOfferUrl} rel="noopener noreferrer" className="inline-block w-full text-green bv-font font-bold text-right">
						<span className="group-hover:tracking-widest group-hover:underline group-hover:italic group-hover:cursor-pointer">view offer</span>
						<span className="pl-4 hover:cursor-pointer">⟶</span>
					</a>
				) : null}
			</div>
		</li>
	)
}

export default PositionCard
