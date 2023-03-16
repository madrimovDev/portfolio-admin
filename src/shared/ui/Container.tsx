import React, {ReactNode} from 'react';

interface ContainerProps {
	children: ReactNode;
}

const Container = ({children}: ContainerProps) => {
	return (
		<div className="w-full mx-auto px-4 sm:px-6 md:px-8">
			{children}
		</div>
	);
};

export default Container;
