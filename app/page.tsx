import Image from 'next/image';

export default function Home() {
	return (
		<div
			className='hero min-h-screen'
			style={{
				backgroundImage: 'url("/NerdHaven.png")',
			}}
		>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-md'>
					<h1 className='mb-5 text-5xl font-bold'>Hail and well met!</h1>
					<p className='mb-5'>
						Stay tuned for more information coming soon to electric scroll
					</p>
					<button className='btn btn-primary'>Get Started</button>
				</div>
			</div>
		</div>
	);
}
