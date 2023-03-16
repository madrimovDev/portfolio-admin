import {useKeyDown, useOutsideClick} from '@/shared';
import React, {FC, useEffect, useRef} from 'react';
import {useBioModal} from '../model/useBioModal';
import BioForm from './BioForm';

const BioModal: FC = () => {
	const {onClose, open} = useBioModal();
	const ref = useRef<HTMLDivElement>(null);

	useKeyDown('Escape', onClose);
	useOutsideClick(ref, onClose);

	if (!open) return null;
	return (
		<div className="fixed inset-0 bg-black/20 backdrop-blur-sm transition-all">
			<div
				ref={ref}
				className="max-w-md p-8 w-full bg-base-100 absolute top-1/4 left-1/2 -translate-x-1/2  "
			>
				<button
					onClick={onClose}
					className="btn btn-square btn-ghost btn-xs absolute top-2 right-2"
				>
					x
        </button>
        
        <BioForm/>
			</div>
		</div>
	);
};

export default BioModal;
