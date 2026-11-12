import { ShieldCheck, Baby, Stethoscope, Activity, Gem, ClipboardList } from 'lucide-react';
import { serviceCategories } from '@/data/clinic';

const icons = [ShieldCheck, Baby, Stethoscope, Activity, Gem, ClipboardList];

export function Services() {
	return (
		<section id="hizmetler" className="services-section">
			<div className="section">
				<div className="section-heading">
					<div>
						<div className="eyebrow">03 / TEDAVİ HİZMETLERİMİZ</div>
						<h2>
							Tedavi
							<br />
							<em>hizmetlerimiz.</em>
						</h2>
					</div>
					<p>
						Ağız ve diş sağlığınızla ilgili ihtiyaçlarınızı
						<br className="desktop-break" /> altı başlıkta birlikte değerlendirelim.
					</p>
				</div>
				<div className="service-grid">
					{serviceCategories.map((category, i) => {
						const Icon = icons[i];
						return (
							<div className="service-card" key={category.title}>
								<div className="service-top">
									<Icon size={28} strokeWidth={1.4} />
									<span>0{i + 1}</span>
								</div>
								<h3>{category.title}</h3>
								<ul className="service-items">
									{category.items.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
							</div>
						);
					})}
				</div>
				<p className="medical-note">
					Tedavi uygunluğu ve kapsamı muayene sonrası belirlenir. Hizmet detayları ve güncel
					uygulamalar için kliniğimizle iletişime geçiniz.
				</p>
			</div>
		</section>
	);
}
