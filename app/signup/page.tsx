'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { WhyTooltip } from '@/components/why-tooltip';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, Eye, EyeOff, Check, AlertCircle, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function SignUpPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [showPw, setShowPw] = useState(false);
  const [consent, setConsent] = useState({ data: false, marketing: false, analytics: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = consent.data && form.name && form.email && form.phone && form.password;

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 8) e.password = 'Min 8 characters';
    if (!consent.data) e.consent = 'You must agree to data collection';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <><Header /><main className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"><Check className="w-10 h-10 text-primary" /></div>
          <h1 className="text-3xl font-bold mb-2">Welcome to CourtBook!</h1>
          <p className="text-muted-foreground mb-6">Your account has been created. Your privacy preferences have been saved.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/"><Button>Browse Courts</Button></Link>
            <Link href="/privacy-settings"><Button variant="outline">Privacy Settings</Button></Link>
          </div>
        </div>
      </main></>
    );
  }

  return (
    <><Header /><main className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
          <p className="text-muted-foreground">Book courts with complete privacy control</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-slide-up">
          {/* Left: Form */}
          <div className="lg:col-span-3 space-y-5">
            <div className="border border-border rounded-xl p-6 bg-card space-y-5">
              <h2 className="font-bold text-lg">Account Information</h2>

              <div className="space-y-2">
                <div className="flex items-center gap-2"><Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                  <WhyTooltip reason="Your name is used for booking confirmations and court check-in only." /></div>
                <Input id="name" placeholder="Enter your full name" value={form.name} onChange={e => { setForm(p => ({ ...p, name: e.target.value })); setErrors(p => ({ ...p, name: '' })); }} className={errors.name ? 'border-destructive' : ''} />
                {errors.name && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2"><Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                  <WhyTooltip reason="We send booking confirmations and reminders. You can change notification preferences anytime." /></div>
                <Input id="email" type="email" placeholder="you@example.com" value={form.email} onChange={e => { setForm(p => ({ ...p, email: e.target.value })); setErrors(p => ({ ...p, email: '' })); }} className={errors.email ? 'border-destructive' : ''} />
                {errors.email && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2"><Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                  <WhyTooltip reason="Used for court check-in and SMS confirmations. Not shared with third parties." /></div>
                <Input id="phone" type="tel" placeholder="+62 812 3456 7890" value={form.phone} onChange={e => { setForm(p => ({ ...p, phone: e.target.value })); setErrors(p => ({ ...p, phone: '' })); }} className={errors.phone ? 'border-destructive' : ''} />
                {errors.phone && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password <span className="text-destructive">*</span></Label>
                <div className="relative">
                  <Input id="password" type={showPw ? 'text' : 'password'} placeholder="Min. 8 characters" value={form.password} onChange={e => { setForm(p => ({ ...p, password: e.target.value })); setErrors(p => ({ ...p, password: '' })); }} className={errors.password ? 'border-destructive pr-10' : 'pr-10'} />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.password}</p>}
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full gap-2" disabled={!canSubmit}>Create Account</Button>
            <p className="text-center text-sm text-muted-foreground">Already have an account? <Link href="/login" className="text-primary hover:underline font-medium">Log in</Link></p>
          </div>

          {/* Right: Privacy Sidebar */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 border border-primary/20 rounded-xl p-6 bg-card space-y-5">
              <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /><h2 className="font-bold text-lg">Your Privacy</h2></div>

              {/* Required Consent */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-lg border border-border bg-accent/30">
                  <Checkbox id="data-consent" checked={consent.data} onCheckedChange={(c) => setConsent(p => ({ ...p, data: !!c }))} className="mt-0.5" />
                  <div>
                    <Label htmlFor="data-consent" className="font-semibold cursor-pointer text-sm">Data Collection Consent <span className="text-destructive">*</span></Label>
                    <p className="text-xs text-muted-foreground mt-1">I agree that CourtBook collects my name, email, and phone to process bookings and send confirmations.</p>
                  </div>
                </div>
                {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

                <div className="flex items-start gap-3 p-3 rounded-lg border border-border">
                  <Checkbox id="marketing" checked={consent.marketing} onCheckedChange={(c) => setConsent(p => ({ ...p, marketing: !!c }))} className="mt-0.5" />
                  <div>
                    <Label htmlFor="marketing" className="font-medium cursor-pointer text-sm">Marketing Emails</Label>
                    <p className="text-xs text-muted-foreground mt-1">Receive special offers and promotions. We&apos;ll never sell your data.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg border border-border">
                  <Checkbox id="analytics" checked={consent.analytics} onCheckedChange={(c) => setConsent(p => ({ ...p, analytics: !!c }))} className="mt-0.5" />
                  <div>
                    <Label htmlFor="analytics" className="font-medium cursor-pointer text-sm">Usage Analytics</Label>
                    <p className="text-xs text-muted-foreground mt-1">Help us improve by sharing anonymized usage patterns.</p>
                  </div>
                </div>
              </div>

              {/* Expandable Privacy Details */}
              <button type="button" onClick={() => setPrivacyOpen(!privacyOpen)} className="flex items-center gap-2 text-sm text-primary hover:underline w-full">
                <ChevronDown className={`w-4 h-4 transition-transform ${privacyOpen ? 'rotate-180' : ''}`} />
                {privacyOpen ? 'Hide' : 'View'} full privacy details
              </button>
              {privacyOpen && (
                <div className="text-xs text-muted-foreground space-y-2 p-3 bg-accent/30 rounded-lg animate-fade-in">
                  <p><strong>What:</strong> Full name, email, phone, booking history</p>
                  <p><strong>Why:</strong> Process bookings and send confirmations</p>
                  <p><strong>How long:</strong> Until account deletion (you control this)</p>
                  <p><strong>Your rights:</strong> Download, delete, or port your data anytime</p>
                </div>
              )}

              <p className="text-xs text-muted-foreground">By creating an account, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.</p>
            </div>
          </div>
        </form>
      </div>
    </main></>
  );
}
