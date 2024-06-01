export const reducer = (currentAction: any, currentState: any) => {
	const { action, payload } = currentAction;
	console.log(action,payload);
	
	switch (action) {
		case 'navigate':
			currentState.screen = payload;
			break;
	}

	return currentState;
};