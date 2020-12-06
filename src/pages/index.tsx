import { useEffect } from 'react';
import { useMeQuery } from '../generated/graphql';

const Index = () => {
	const [me, runMeQuery] = useMeQuery();
	useEffect(() => {
		runMeQuery();
	}, []);

	return (
		<div>
			<h1>Hello {me.data?.me?.username}</h1>
		</div>
	);
};

export default Index;
