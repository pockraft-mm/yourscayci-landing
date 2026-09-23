import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { FormEvent } from 'react';
import { RouteLink } from '../components/RouteLink';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { useLandingPage } from '../context/LandingPageContext';
import { Icon } from '../factories/iconRegistry';

export function DemoPage() {
  const landingPage = useLandingPage();
  const { contact, demo } = landingPage;
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (!contact.form.action) event.preventDefault();
  };

  return (
    <div className="demo-page">
      <section className="demo-hero section-border">
        <div className="container">
          <RouteLink href="/" className="back-link"><ArrowLeft size={15} /> Back to overview</RouteLink>
          <Badge>{demo.eyebrow}</Badge>
          <h1>{demo.title}</h1>
          <p>{demo.description}</p>
        </div>
      </section>

      <section className="demo-content section-border">
        <div className="container">
          <div className="demo-frame">
            <div className="demo-toolbar"><span></span><span></span><span></span><small>{demo.frameUrl}</small></div>
            <button className="demo-play" type="button" aria-label="Play project demo"><Icon name="play" size={24} /></button>
            <p>{demo.frameNote}</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div><Badge>{contact.eyebrow}</Badge><h2>{contact.title}</h2><p>{contact.description}</p></div>
          <form className="contact-form" action={contact.form.action} method={contact.form.method ?? 'post'} onSubmit={handleSubmit}>
            <label>{contact.form.nameLabel}<input name="name" placeholder={contact.form.namePlaceholder} required /></label>
            <label>{contact.form.emailLabel}<input name="email" type="email" placeholder={contact.form.emailPlaceholder} required /></label>
            <label>{contact.form.messageLabel}<textarea name="message" rows={5} placeholder={contact.form.messagePlaceholder} required /></label>
            <Button type="submit">{contact.form.submitLabel} <ArrowRight size={15} /></Button>
          </form>
        </div>
      </section>
    </div>
  );
}
