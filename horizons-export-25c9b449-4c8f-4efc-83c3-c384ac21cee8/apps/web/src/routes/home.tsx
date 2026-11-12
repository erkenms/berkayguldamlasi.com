import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { clinic, faqs } from '@/data/clinic';
import { Hero } from '@/components/home/hero';
import { Gallery } from '@/components/home/gallery';
import { Services } from '@/components/home/services';
import { Faq } from '@/components/home/faq';
import { Contact } from '@/components/home/contact';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: 'Kastamonu Diş Hekimi | Barış Berkay GÜLDAMLASI',
			description:
				'Kastamonu Merkez’de Diş Hekimi Barış Berkay GÜLDAMLASI. Tedavi hizmetleri, çalışma saatleri ve adres bilgilerine ulaşın; online randevu ile veya WhatsApp üzerinden randevu talep edin.',
			image: clinic.hero,
			jsonLd: [
				{ '@context': 'https://schema.org', '@type': 'WebSite', name: clinic.name, inLanguage: 'tr' },
				{
					'@context': 'https://schema.org',
					'@type': 'Dentist',
					name: clinic.name,
					telephone: '+905407400037',
					address: {
						'@type': 'PostalAddress',
						streetAddress: 'Cebrail, Plevne Cd. No:24/1',
						addressLocality: 'Kastamonu Merkez',
						addressRegion: 'Kastamonu',
						postalCode: '37200',
						addressCountry: 'TR',
					},
					openingHours: ['Mo-Fr 09:00-19:00', 'Sa 10:00-17:00'],
				},
				{
					'@context': 'https://schema.org',
					'@type': 'FAQPage',
					mainEntity: faqs.map(([q, a]) => ({
						'@type': 'Question',
						name: q,
						acceptedAnswer: { '@type': 'Answer', text: a },
					})),
				},
			],
		},
	);
}

export default function HomePage() {
	return (
		<main>
			<Hero />
			<Gallery />
			<Services />
			<Faq />
			<Contact />
		</main>
	);
}
