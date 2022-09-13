const LoadingSpinner = () => {
	return (
		<div className="flex h-[calc(100vh-87px)] items-center justify-center bg-[#f5f5f5] dark:bg-dark-primary lg:h-[calc(100vh-100px)] lg:bg-[#ededed] dark:lg:bg-dark-primary">
			<div
				className=" h-8 w-8 animate-spin rounded-full border-4 border-meli-yellow border-r-transparent"
				role="status"
			/>
		</div>
	);
};

export default LoadingSpinner;
