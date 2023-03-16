import React, {Fragment, useEffect} from 'react';
import {BioService} from '../model/bio.service';
import {useBioStore} from '../model/useBio';
import BioCards from './BioCards';
import BioModal from './BioModal';
import {useDisclouse} from '@/shared/hooks/useDisclosure';
import { useBioModal } from '../model/useBioModal';

const Bio = () => {
	const setAllBios = useBioStore((state) => state.setAllBios);
	const isLoading = useBioStore((state) => state.isLoading);
	const onOpen = useBioModal(state => state.onOpen);
	useEffect(() => {
		setAllBios();
	}, []);
	console.log('render');

	if (isLoading) return <>Loading...</>;

	return (
		<div>
      <div className='flex justify-between items-center'>
				<h2 className='text-2xl'>Bio</h2>
				<button onClick={() => onOpen()} className="btn btn-secondary btn-sm">
					Create
				</button>
			</div>
        <div className='divider'/>
			<BioCards />
			<BioModal />
		</div>
	);
};

export default Bio;
