import { Plus } from 'lucide-react';
import { faqs } from '@/data/clinic';
export function Faq() {
 return <section id="sorular" className="faq-section"><div className="section faq-layout"><div><div className="eyebrow">04 / SIK SORULAN SORULAR</div><h2>Aklınızdaki<br /><em>sorular için.</em></h2><p>Burada yanıtını bulamadığınız sorularınız<br className="desktop-break" /> için kliniğimizle iletişime geçebilirsiniz.</p><a className="text-link" href="#iletisim">Bize ulaşın <Plus size={16} /></a></div><div className="faq-list">{faqs.map(([q, a]) => <details key={q}><summary>{q}<Plus size={20} /></summary><p>{a}</p></details>)}</div></div></section>;
}
