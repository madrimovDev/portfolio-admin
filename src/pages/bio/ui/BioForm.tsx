import React, {FormEvent, useEffect, useRef} from 'react';
import {useBioStore} from '../model/useBio';
import {useBioModal} from '../model/useBioModal';

const BioForm = () => {
	const createBio = useBioStore((state) => state.createBio);
	const updateBio = useBioStore((state) => state.updateBio);
	const onClose = useBioModal((state) => state.onClose);
	const data = useBioModal<Bio.BioData>((state) => state.data);
	const formRef = useRef<HTMLFormElement>(null);
	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const _data = Object.fromEntries(formData.entries());

		const hasError = {
			error: false,
		};

		for (let key in data) {
			if (_data[key] === '') {
				hasError.error = true;
			}
		}

		if (!hasError.error) {
			if (data) {
				const bioData = {
					..._data,
					year: new Date(_data.year as string),
				};
				updateBio(data.id, bioData as Omit<Bio.BioData, 'id'>);
				event.currentTarget.reset();
				onClose();
			} else {
				const bioData = {
					..._data,
					year: new Date(_data.year as string),
				};
				createBio(bioData as Omit<Bio.BioData, 'id'>);
				event.currentTarget.reset();
				onClose();
			}
		}
	};

	useEffect(() => {
		if (data && formRef.current) {
			for (let key in data) {
				if (key !== 'id') {
					if (key === 'year') {
						formRef.current[key].defaultValue = new Date(data[key]).getFullYear();
					} else {
						formRef.current[key].defaultValue = data[key as keyof Bio.BioData];
					}
				}
			}
		}
	}, [formRef, data]);

	return (
		<form
			ref={formRef}
			onSubmit={submitHandler}
			className="flex flex-col gap-8"
		>
			<div className="form-control">
				<label className="label">
					<span className="label-text">Year</span>
				</label>
				<input
					type="number"
					min={2000}
					max={new Date().getFullYear()}
					name="year"
					className="input input-bordered bg-transparent"
				/>
			</div>
			<div className="form-control">
				<label className="label">
					<span className="label-text">Description</span>
				</label>
				<textarea
					name="description"
					className="textarea textarea-bordered bg-transparent"
				/>
			</div>
			<button className="btn btn-primary">create</button>
		</form>
	);
};

export default BioForm;
