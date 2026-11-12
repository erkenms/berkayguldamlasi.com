import { useEffect, useState } from 'react';
import {
	acceptAllCookies,
	hasConsentDecision,
	onCookiePreferencesRequested,
	rejectOptionalCookies,
	saveConsent,
} from '@/lib/cookie-consent';

export function CookieBanner() {
	const [open, setOpen] = useState(false);
	const [prefs, setPrefs] = useState(false);
	const [analytics, setAnalytics] = useState(false);
	const [marketing, setMarketing] = useState(false);
	const [platformAnalytics, setPlatformAnalytics] = useState(false);

	useEffect(() => {
		setOpen(!hasConsentDecision());
		return onCookiePreferencesRequested(() => {
			setPrefs(true);
			setOpen(true);
		});
	}, []);

	if (!open) return null;

	return (
		<div className="cookie-banner" role="dialog" aria-label="Çerez tercihleri">
			<p>
				Sitenin çalışması için zorunlu çerezler kullanılır. İstatistik, pazarlama ve platform analitiği çerezleri yalnızca onayınızla yüklenir.
			</p>
			{prefs ? (
				<div className="cookie-prefs">
					<label>
						<input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} /> Analitik — ziyaret istatistikleri
					</label>
					<label>
						<input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} /> Pazarlama — reklam ölçümü
					</label>
					<label>
						<input type="checkbox" checked={platformAnalytics} onChange={(e) => setPlatformAnalytics(e.target.checked)} /> Platform analitiği — Hostinger’ın mağaza kullanım ölçümü
					</label>
					<div className="cookie-actions">
						<button
							type="button"
							className="button"
							onClick={() => {
								saveConsent({ analytics, marketing, platformAnalytics });
								setOpen(false);
							}}
						>
							Seçimi kaydet
						</button>
						<button type="button" className="button button-outline" onClick={() => setPrefs(false)}>
							Geri
						</button>
					</div>
				</div>
			) : (
				<div className="cookie-actions">
					<button
						type="button"
						className="button"
						onClick={() => {
							acceptAllCookies();
							setOpen(false);
						}}
					>
						Tümünü kabul et
					</button>
					<button
						type="button"
						className="button button-outline"
						onClick={() => {
							rejectOptionalCookies();
							setOpen(false);
						}}
					>
						Reddet
					</button>
					<button type="button" className="button button-outline" onClick={() => setPrefs(true)}>
						Tercihler
					</button>
				</div>
			)}
		</div>
	);
}
