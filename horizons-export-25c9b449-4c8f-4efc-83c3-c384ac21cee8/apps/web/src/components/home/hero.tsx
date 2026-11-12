import { ArrowUpRight, Phone } from 'lucide-react';
import { clinic, biography } from '@/data/clinic';

export function Hero() {
	return (
		<section id="hakkimizda" className="hero">
			<div className="hero-split">
				<div className="hero-portrait">
					<img
						src={clinic.photos.portrait}
						alt="Diş Hekimi Barış Berkay Güldamlası portre fotoğrafı"
						width={800}
						height={1000}
						fetchPriority="high"
					/>
					<div className="image-caption">
						Diş Hekimi
						<br />
						<strong>Barış Berkay GÜLDAMLASI</strong>
					</div>
				</div>
				<div className="hero-copy">
					<div className="eyebrow">
						<span /> 01 / HEKİM &amp; KLİNİK
					</div>
					<h1>
						Her gülümseme,
						<br />
						<em>özen ve güvenle başlar.</em>
					</h1>
					<p className="lead">
						Diş Hekimi Barış Berkay GÜLDAMLASI
						<br />
						Kastamonu’da diş hekimi
					</p>
					{biography.map((paragraph, i) => (
						<p key={i}>{paragraph}</p>
					))}
					<div className="actions">
						<a className="button" href={clinic.booking} target="_blank" rel="noreferrer">
							Online Randevu Alın <ArrowUpRight size={19} />
						</a>
						<a className="button button-outline" href={clinic.tel}>
							<Phone size={17} /> Bizi Arayın
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
