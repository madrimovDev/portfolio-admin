import React, {FC, memo} from 'react';
import {useBioStore} from '../model/useBio';
import {formatDate} from '@/shared';
import {useBioModal} from '../model/useBioModal';

interface BioCardProps {
	bio: Bio.BioData;
}

const BioCard: FC<BioCardProps> = ({bio}) => {
	const onOpen = useBioModal((state) => state.onOpen);
	return (
		<div className="card bg-base-200 shadow-xl">
			<div className="card-body overflow-hidden">
				<h2 className="card-title">
					{formatDate(bio.year as unknown as string, 'YYYY-MM-DD')}
				</h2>
				<p className="whitespace-pre-wrap ">{bio.description}</p>
				<div className="card-actions justify-end pt-4">
					<button
						className="btn btn-xs btn-success"
						onClick={() => onOpen(bio)}
					>
						Edit
					</button>
					<button className="btn btn-xs btn-error">Delete</button>
				</div>
			</div>
		</div>
	);
};

const BioCards = () => {
	const bios = useBioStore((state) => state.bios);
	return (
		<div className="grid gap-4 grid-cols-5">
			{bios.map((bio) => (
				<BioCard key={bio.id} bio={bio} />
			))}
		</div>
	);
};

export default BioCards;
