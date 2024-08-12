const checkSignIn: React.FC<any> = async (accessToken: string): Promise<any> => {
	if(!accessToken) return {status: false}
	const response = await fetch('http://localhost:3001/profile', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${accessToken}`
		},
	});
	if (!response.ok) return {status: false}
	const data = await response.json()
	return {
		data: data,
		status: true
	};
};

export default checkSignIn;
