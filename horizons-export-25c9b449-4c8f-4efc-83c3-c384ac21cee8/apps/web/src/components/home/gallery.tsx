import { clinic } from '@/data/clinic';

const frames = [
	{
		src: clinic.photos.reception,
		alt: 'Diş Hekimi Barış Berkay Güldamlası kliniğinin resepsiyon ve bekleme alanı',
		label: 'Bekleme alanı',
	},
	{
		src: clinic.photos.treatment,
		alt: 'Pencereli tedavi odası, diş üniti ve hekim koltuğu',
		label: 'Tedavi odası',
	},
	{
		src: clinic.photos.procedure,
		alt: 'Diş Hekimi Barış Berkay Güldamlası, büyüteçli lamba ve maske ile tedavi sırasında',
		label: 'Tedavi anı',
	},
	{
		src: clinic.photos.waiting,
		alt: 'Bekleme alanı, diş şemalı duvar ve resepsiyon bankosu',
		label: 'Bekleme alanı',
	},
];

export function Gallery() {
	return (
		<section id="klinik" className="gallery-section">
			<div className="section">
				<div className="section-heading">
					<div>
						<div className="eyebrow">02 / KLİNİKTEN</div>
						<h2>
							Kliniğimizden
							<br />
							<em>kareler.</em>
						</h2>
					</div>
				</div>
				<div className="gallery-grid">
					{frames.map((frame) => (
						<figure key={frame.label}>
							<img src={frame.src} alt={frame.alt} width={900} height={700} loading="lazy" />
							<figcaption>{frame.label}</figcaption>
						</figure>
					))}
				</div>
			</div>
		</section>
	);
}
