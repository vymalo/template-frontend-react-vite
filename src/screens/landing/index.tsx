import { Button } from 'react-daisyui';
import { useCallback } from 'react';
import { toastInfo } from '@mod/notification';

export default function LandingScreen() {
	const showToast = useCallback(() => {
		toastInfo('Hello from the landing screen!', 'This is a toast message');
	}, []);

	return (
		<div className="container mx-auto">
			<div className="flex flex-col gap-4">
				Welcome to the landing screen!

				<div>
					<Button color="secondary" onClick={showToast}>
						Click me!
					</Button>
				</div>
			</div>
		</div>
	);
}