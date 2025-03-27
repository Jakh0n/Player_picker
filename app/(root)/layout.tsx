const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full w-full flex items-center justify-center'>
			<div className='w-full max-w-md'>{children}</div>
		</div>
	)
}

export default Layout
