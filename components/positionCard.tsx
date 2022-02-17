import { FC } from 'react'

const PositionCard: FC<any> = ({ position }) => {
	return (
		<li className="relative pt-8 mb-4">
			<img src="https://via.placeholder.com/150" className="absolute top-0 w-16" alt={position.projectOrCompanyName} />
			<div className="bg-white ml-5 py-2 px-4">
				<h4 className="ml-10 mb-2">
					<span className="bg-font">{position.title}</span>
					<span className="bv-font"> @ {position.projectOrCompanyName}</span>
				</h4>

				<p className="text-sm">{position.description}</p>

				{position.positionOfferUrl ? (
					<a target="_blank" href={position.positionOfferUrl} rel="noopener noreferrer" className="inline-block w-full text-sm text-green bv-font font-extralight text-right">
						<span className="group-hover:tracking-widest group-hover:underline group-hover:italic group-hover:cursor-pointer">view offer</span>
						<span className="pl-4 hover:cursor-pointer">⟶</span>
					</a>
				) : null}
			</div>
		</li>
	)
}

export default PositionCard
