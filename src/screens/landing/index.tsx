import { Button } from 'react-daisyui';
import { useCallback } from 'react';
import { toastInfo } from '@mod/notification';
import { useTranslation } from 'react-i18next';

export default function LandingScreen() {
	const { t } = useTranslation('action');
	const showToast = useCallback(() => {
		toastInfo('Hello from the landing screen!', 'This is a toast message');
	}, []);

	return (
		<div className="container mx-auto">
			<div className="flex flex-col gap-4">
				Welcome to the landing screen!

				<div>
					<Button color="secondary" onClick={showToast}>
						{t('showToast')}
					</Button>
				</div>
			</div>
		</div>
	);
}