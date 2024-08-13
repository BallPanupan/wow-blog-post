const checkSignIn: React.FC<any> = async (accessToken: string): Promise<any> => {
	try {
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
	}catch(error){
		localStorage.removeItem('accesstoken');
		return { status: false }
	}
};

export default checkSignIn;
