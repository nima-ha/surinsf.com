import { useState } from "react";
import { useI18n } from "@/i18n";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { t } = useI18n();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const { contact } = t.pages;

  return (
    <main className="pt-28 pb-20">
      <div className="container-large px-6">
        <div
          ref={titleRef}
          className={cn("text-center mb-16 anim-hidden", titleVisible && "anim-visible")}
        >
          <span className="text-xs font-geist-mono tracking-widest text-exvia-blue uppercase">
            {t.nav.contactLabel}
          </span>
          <h1 className="text-h2 mt-4 mb-6">{contact.title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-exvia-blue" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">آدرس</h4>
                  <p className="text-muted-foreground">{contact.info.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-exvia-blue" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">تلفن</h4>
                  <p className="text-muted-foreground" dir="ltr">{contact.info.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-exvia-blue" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">ایمیل</h4>
                  <p className="text-muted-foreground">{contact.info.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-exvia-blue" size={20} />
                <div>
                  <h4 className="font-semibold mb-1">ساعات کاری</h4>
                  <p className="text-muted-foreground">{contact.info.workingHours}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="p-8 rounded-xl border border-border bg-card text-center">
                <p className="text-lg font-semibold text-green-600 mb-2">
                  {contact.form.success}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={contact.form.name}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-exvia-blue"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={contact.form.email}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-exvia-blue"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder={contact.form.phone}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-exvia-blue"
                  />
                </div>
                <div>
                  <textarea
                    placeholder={contact.form.message}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-exvia-blue resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-exvia-black text-white rounded-lg hover:bg-exvia-base-black transition-colors font-medium"
                >
                  {contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
