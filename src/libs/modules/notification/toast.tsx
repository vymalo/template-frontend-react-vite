import { toast } from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import { X } from 'react-feather';

const colorClasses = {
	primary: ['alert-primary'],
	secondary: ['alert-secondary'],
	success: ['alert-success'],
	danger: ['alert-danger'],
	warning: ['alert-warning'],
	info: ['alert-info'],
};

export type ComponentColor = keyof typeof colorClasses;

export const toastMessage = (msg: string, subtitle?: string, color: ComponentColor = 'warning') => toast.custom((t) => (
	<div
		role={t.ariaProps.role}
		aria-live={t.ariaProps['aria-live']}
		className={
			twMerge(
				'max-w-md w-full rounded-lg alert justify-between flex items-center',
				colorClasses[color][0],
				t.visible ? 'animate-enter' : 'animate-leave',
				t.className,
			)
		}
	>
		<div>
			{msg && <h3 className="font-bold">{msg}</h3>}
			{subtitle && <div className="text-xs">{subtitle}</div>}
		</div>

		<div>
			<button
				onClick={() => toast.dismiss(t.id)}
				className={twMerge(
					'btn btn-sm btn-ghost btn-circle',
				)}
			>
				<X />
			</button>
		</div>
	</div>
), {
	duration: import.meta.env.DEV ? 15_000 : 5_000, // 10s in dev, 5s in prod
});

export const toastSuccess = (msg: string, subtitle?: string) => toastMessage(msg, subtitle, 'success');
export const toastError = (msg: string, subtitle?: string) => toastMessage(msg, subtitle, 'danger');
export const toastInfo = (msg: string, subtitle?: string) => toastMessage(msg, subtitle, 'info');
export const toastWarn = (msg: string, subtitle?: string) => toastMessage(msg, subtitle, 'warning');