"use client";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<main className="main">
			<div className="error">
				<div className="error__title">
					<h2 className="heading-secondary heading-secondary--error">
						Uh oh! Something went wrong!
					</h2>
					<h2 className="error__emoji">😢 🤯</h2>
				</div>
				<div className="error__msg">{error.message}</div>
				<button
					onClick={reset}
					className="text-2xl mt-6 border-2 border-black p-4"
				>
					Try again
				</button>
			</div>
		</main>
	);
}
