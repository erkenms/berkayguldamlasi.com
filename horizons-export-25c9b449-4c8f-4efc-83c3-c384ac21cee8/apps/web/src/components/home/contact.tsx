import { ArrowUpRight, Phone, MessageCircle, MapPin, Clock, CalendarClock } from 'lucide-react';
import { clinic } from '@/data/clinic';

export function Contact() {
	return (
		<section id="iletisim" className="contact-section">
			<div className="section">
				<div className="contact-heading">
					<div className="eyebrow">05 / İLETİŞİM &amp; RANDEVU</div>
					<h2>
						Gülümsemeniz için
						<br />
						<em>birlikte ilk adımı atalım.</em>
					</h2>
					<p>Randevu talebiniz ve sorularınız için bize ulaşın.</p>
					<div className="actions">
						<a className="button button-white" href={clinic.booking} target="_blank" rel="noreferrer">
							<CalendarClock size={18} /> Online Randevu Alın
						</a>
						<a className="button contact-whatsapp" href={clinic.whatsapp} target="_blank" rel="noreferrer">
							<MessageCircle size={19} /> WhatsApp <ArrowUpRight size={18} />
						</a>
					</div>
				</div>
				<div className="contact-info">
					<div>
						<div className="info-title">
							<MapPin size={20} />
							<h3>Kliniğimiz</h3>
						</div>
						<p>{clinic.address}</p>
						<a href={clinic.map} target="_blank" rel="noreferrer" className="text-link">
							Yol tarifi alın <ArrowUpRight size={18} />
						</a>
					</div>
					<div>
						<div className="info-title">
							<Clock size={20} />
							<h3>Çalışma saatleri</h3>
						</div>
						<dl>
							<div>
								<dt>Hafta içi</dt>
								<dd>09:00 – 19:00</dd>
							</div>
							<div>
								<dt>Cumartesi</dt>
								<dd>10:00 – 17:00</dd>
							</div>
							<div>
								<dt>Pazar</dt>
								<dd>Kapalı</dd>
							</div>
						</dl>
					</div>
					<a className="location-panel" href={clinic.map} target="_blank" rel="noreferrer">
						<MapPin size={32} strokeWidth={1.5} />
						<strong>Kastamonu Merkez</strong>
						<span>
							Google Haritalar'da yol tarifi <ArrowUpRight size={15} />
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
