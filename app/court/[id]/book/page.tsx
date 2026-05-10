'use client';

import { use, useState, useMemo } from 'react';
import { Header } from '@/components/header';
import { BookingSummary } from '@/components/booking-summary';
import { WhyTooltip } from '@/components/why-tooltip';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { courts, timeSlots, bookedSlots } from '@/lib/data';
import { ArrowLeft, Check, Clock, Shield, CalendarDays, ChevronLeft, ChevronRight, AlertCircle, PartyPopper } from 'lucide-react';
import Link from 'next/link';

const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa'];
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();
  const days: { day: number; current: boolean; date: Date }[] = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({ day: prevMonthDays - i, current: false, date: new Date(year, month - 1, prevMonthDays - i) });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({ day: i, current: true, date: new Date(year, month, i) });
  }
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push({ day: i, current: false, date: new Date(year, month + 1, i) });
  }
  return days;
}

function formatDate(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function displayDate(d: Date) {
  const opts: Intl.DateTimeFormatOptions = { weekday:'long', day:'numeric', month:'long', year:'numeric' };
  return d.toLocaleDateString('en-US', opts);
}

export default function BookingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const court = courts.find(c => c.id === parseInt(id));
  const [step, setStep] = useState(1);
  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);
  const [minimalData, setMinimalData] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', players: '2', notes: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [confirmed, setConfirmed] = useState(false);
  const [privacyAck, setPrivacyAck] = useState(false);

  const calendarDays = useMemo(() => getCalendarDays(calYear, calMonth), [calYear, calMonth]);
  const dateKey = selectedDate ? formatDate(selectedDate) : '';
  const bookedForDate = bookedSlots[dateKey] || [];

  if (!court) {
    return (<><Header /><main className="min-h-screen bg-background flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold mb-2">Court not found</h1><Link href="/"><Button>Back to Courts</Button></Link></div></main></>);
  }

  const isPast = (d: Date) => { const t = new Date(); t.setHours(0,0,0,0); return d < t; };
  const isBooked = (slot: string) => bookedForDate.some(b => b.time === slot);
  const toggleSlot = (slot: string) => {
    setSelectedSlots(prev => prev.includes(slot) ? prev.filter(s => s !== slot) : [...prev, slot].sort());
  };

  const validateStep2 = () => {
    const e: Record<string,string> = {};
    if (!formData.name.trim()) e.name = 'Full name is required';
    if (!minimalData && !formData.email.trim()) e.email = 'Email is required';
    else if (!minimalData && formData.email && !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Invalid email';
    if (!formData.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^[\d\s\-+()]{8,}$/.test(formData.phone)) e.phone = 'Invalid phone number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const isPastTimeSlot = (slot: string, date: Date) => {
    if (formatDate(date) !== formatDate(today)) return false;

    const [hours, minutes] = slot.split(':').map(Number);
    const slotDate = new Date(date);
    slotDate.setHours(hours, minutes, 0, 0);

    const now = new Date();
    return slotDate <= now;
  };

  const handleConfirm = () => { setConfirmed(true); };

  if (confirmed) {
    return (
      <><Header /><main className="min-h-screen bg-background flex items-center justify-center"><div className="text-center max-w-md mx-auto p-8 animate-scale-in">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"><PartyPopper className="w-10 h-10 text-primary" /></div>
        <h1 className="text-3xl font-bold mb-2">Booking Confirmed!</h1>
        <p className="text-muted-foreground mb-2">Your booking at <strong>{court.name}</strong> has been confirmed.</p>
        <p className="text-sm text-muted-foreground mb-6">Booking ID: <span className="font-mono font-semibold">BK-2026-{Math.floor(Math.random()*9000+1000)}</span></p>
        <div className="p-4 bg-primary/5 rounded-xl border border-primary/15 mb-6 text-left space-y-2">
          <div className="flex items-center gap-2 text-sm"><Shield className="w-4 h-4 text-primary" /><span>Confirmation sent to {minimalData ? 'your phone' : formData.email || 'your phone'}</span></div>
          <div className="flex items-center gap-2 text-sm"><Shield className="w-4 h-4 text-primary" /><span>Data kept for {court.retentionPeriod} only</span></div>
          <div className="flex items-center gap-2 text-sm"><Shield className="w-4 h-4 text-primary" /><span>Court staff has: name & {minimalData ? 'phone only' : 'contact info'}</span></div>
        </div>
        <div className="flex gap-3 justify-center">
          <Link href="/my-bookings"><Button>View My Bookings</Button></Link>
          <Link href="/"><Button variant="outline">Browse Courts</Button></Link>
        </div>
      </div></main></>
    );
  }

  return (
    <><Header /><main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-4 pb-2">
        <Link href={`/court/${court.id}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to {court.name}
        </Link>
      </div>

      {/* Progress Steps */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2 mb-8">
          {[{n:1,l:'Date & Time'},{n:2,l:'Group Details'},{n:3,l:'Review & Confirm'}].map((s,i) => (
            <div key={s.n} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s.n ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                {step > s.n ? <Check className="w-4 h-4" /> : s.n}
              </div>
              <span className={`text-sm hidden sm:inline ${step >= s.n ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>{s.l}</span>
              {i < 2 && <div className={`w-8 sm:w-16 h-0.5 ${step > s.n ? 'bg-primary' : 'bg-muted'}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 animate-fade-in">
            {/* STEP 1: Date & Time */}
            {step === 1 && (
              <div className="space-y-6">
                <div><h1 className="text-2xl font-bold mb-1">Select Date & Time</h1><p className="text-muted-foreground text-sm">Choose when you want to play at {court.name}</p></div>

                {/* Calendar */}
                <div className="border border-border rounded-xl p-4 bg-card">
                  <h3 className="font-semibold mb-4 flex items-center gap-2"><CalendarDays className="w-5 h-5 text-primary" /> Choose Date</h3>
                  <div className="max-w-sm mx-auto">
                    <div className="flex items-center justify-between mb-4">
                      <button onClick={() => { if (calMonth === 0) { setCalMonth(11); setCalYear(y=>y-1); } else setCalMonth(m=>m-1); }} className="p-1 hover:bg-accent rounded"><ChevronLeft className="w-5 h-5" /></button>
                      <span className="font-semibold">{MONTHS[calMonth]} {calYear}</span>
                      <button onClick={() => { if (calMonth === 11) { setCalMonth(0); setCalYear(y=>y+1); } else setCalMonth(m=>m+1); }} className="p-1 hover:bg-accent rounded"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                      {DAYS.map(d => <div key={d} className="py-1 font-medium text-muted-foreground">{d}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-sm">
                      {calendarDays.map((d, i) => {
                        const past = isPast(d.date);
                        const sel = selectedDate && formatDate(selectedDate) === formatDate(d.date);
                        const isToday = formatDate(d.date) === formatDate(today);
                        return (
                          <button key={i} disabled={!d.current || past}
                            onClick={() => { setSelectedDate(d.date); setSelectedSlots([]); }}
                            className={`py-2 rounded-lg transition-all text-sm ${!d.current ? 'text-muted-foreground/30' : past ? 'text-muted-foreground/40 cursor-not-allowed' : sel ? 'bg-primary text-primary-foreground font-bold shadow-md' : isToday ? 'bg-primary/10 text-primary font-semibold hover:bg-primary/20' : 'hover:bg-accent'}`}>
                            {d.day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="border border-border rounded-xl p-4 bg-card animate-slide-up">
                    <h3 className="font-semibold mb-1 flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> Available Time Slots — {displayDate(selectedDate)}</h3>
                    <p className="text-xs text-muted-foreground mb-4">Select one or more consecutive time slots</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                      {timeSlots.map(slot => {
                        const booked = isBooked(slot);
                        const pastTime = selectedDate ? isPastTimeSlot(slot, selectedDate) : false;
                        const selected = selectedSlots.includes(slot);
                        const disabled = booked || pastTime;

                        return (
                            <button
                                key={slot}
                                disabled={disabled}
                                onClick={() => toggleSlot(slot)}
                                className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                                    disabled
                                        ? 'bg-muted/50 text-muted-foreground/40 border-border cursor-not-allowed line-through'
                                        : selected
                                            ? 'bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]'
                                            : 'border-border hover:border-primary/50 hover:bg-primary/5'
                                }`}
                            >
                              <Clock
                                  className={`w-4 h-4 mx-auto mb-1 ${
                                      selected
                                          ? 'text-primary-foreground'
                                          : disabled
                                              ? 'text-muted-foreground/40'
                                              : 'text-muted-foreground'
                                  }`}
                              />
                              {slot}
                            </button>
                        );
                      })}
                    </div>
                    <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded border border-border bg-background" /> Available</span>
                      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-primary" /> Selected</span>
                      <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-muted/50" /> Booked</span>
                    </div>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button size="lg" disabled={!selectedDate || selectedSlots.length === 0} onClick={() => setStep(2)} className="gap-2 min-w-[200px]">
                    Continue to Details <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* STEP 2: Group Details */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div><h1 className="text-2xl font-bold mb-1">Group Details</h1><p className="text-muted-foreground text-sm">Tell us who&apos;s playing</p></div>

                <div className="border border-border rounded-xl p-6 bg-card space-y-5">
                  <h3 className="font-semibold">Contact Person</h3>

                  {/* Minimal Data Toggle */}
                  <div className="flex items-center justify-between p-4 bg-primary/5 rounded-lg border border-primary/15">
                    <div className="flex-1">
                      <div className="flex items-center gap-2"><Label htmlFor="minimal-data" className="font-semibold cursor-pointer">Minimal Data Mode</Label>
                        <Badge variant="secondary" className="text-xs">Privacy</Badge></div>
                      <p className="text-xs text-muted-foreground mt-1">Only name & phone collected — no email stored</p>
                    </div>
                    <Switch id="minimal-data" checked={minimalData} onCheckedChange={setMinimalData} />
                  </div>

                  {/* Name */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2"><Label htmlFor="name">Full Name <span className="text-destructive">*</span></Label>
                      <WhyTooltip reason="We use your name for booking confirmation and court staff check-in. It is not shared with third parties." /></div>
                    <Input id="name" placeholder="Enter your full name" value={formData.name} onChange={e => { setFormData(p=>({...p,name:e.target.value})); setErrors(p=>({...p,name:''})); }}
                      className={errors.name ? 'border-destructive' : ''} />
                    {errors.name && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                    <p className="text-xs text-muted-foreground">Used for: booking confirmation only</p>
                  </div>

                  {/* Email */}
                  {!minimalData && (
                    <div className="space-y-2 animate-fade-in">
                      <div className="flex items-center gap-2"><Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
                        <WhyTooltip reason="We send your booking confirmation and reminders to this email. You can opt out of reminders anytime." /></div>
                      <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={e => { setFormData(p=>({...p,email:e.target.value})); setErrors(p=>({...p,email:''})); }}
                        className={errors.email ? 'border-destructive' : ''} />
                      {errors.email && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                      <p className="text-xs text-muted-foreground">Used for: confirmation email & reminders</p>
                    </div>
                  )}

                  {/* Phone */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2"><Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                      <WhyTooltip reason="Court staff uses your phone number for check-in. We also send SMS confirmations if you opted out of email." /></div>
                    <Input id="phone" type="tel" placeholder="+62 812 3456 7890" value={formData.phone} onChange={e => { setFormData(p=>({...p,phone:e.target.value})); setErrors(p=>({...p,phone:''})); }}
                      className={errors.phone ? 'border-destructive' : ''} />
                    {errors.phone && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    <p className="text-xs text-muted-foreground">Used for: court check-in contact</p>
                  </div>

                  {/* Players */}
                  <div className="space-y-2">
                    <Label htmlFor="players">Number of Players</Label>
                    <select id="players" value={formData.players} onChange={e => setFormData(p=>({...p,players:e.target.value}))} className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background">
                      {['2','3','4','5','6','7','8'].map(n => <option key={n} value={n}>{n} players</option>)}
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes">Special Requests <span className="text-muted-foreground text-xs">(Optional)</span></Label>
                    <textarea id="notes" placeholder="Any special requirements..." value={formData.notes} onChange={e => setFormData(p=>({...p,notes:e.target.value}))}
                      className="w-full px-3 py-2 border border-border rounded-md text-sm bg-background min-h-[80px] resize-none" />
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" size="lg" onClick={() => setStep(1)} className="gap-2"><ChevronLeft className="w-4 h-4" /> Back</Button>
                  <Button size="lg" onClick={() => { if (validateStep2()) setStep(3); }} className="gap-2 min-w-[200px]">Review Booking <ChevronRight className="w-4 h-4" /></Button>
                </div>
              </div>
            )}

            {/* STEP 3: Review & Confirm */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div><h1 className="text-2xl font-bold mb-1">Review & Confirm</h1><p className="text-muted-foreground text-sm">Please review your booking before confirming</p></div>

                {/* Booking Details */}
                <div className="border border-border rounded-xl p-6 bg-card space-y-4">
                  <h3 className="font-semibold">Booking Details</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><p className="text-muted-foreground text-xs">Court</p><p className="font-semibold">{court.name}</p></div>
                    <div><p className="text-muted-foreground text-xs">Date</p><p className="font-semibold">{selectedDate ? displayDate(selectedDate) : ''}</p></div>
                    <div><p className="text-muted-foreground text-xs">Time</p><p className="font-semibold">{selectedSlots.join(', ')}</p></div>
                    <div><p className="text-muted-foreground text-xs">Players</p><p className="font-semibold">{formData.players}</p></div>
                    <div><p className="text-muted-foreground text-xs">Contact</p><p className="font-semibold">{formData.name}</p></div>
                    <div><p className="text-muted-foreground text-xs">Phone</p><p className="font-semibold">{formData.phone}</p></div>
                  </div>
                </div>

                {/* Privacy Check */}
                <div className="border-2 border-primary/30 rounded-xl p-6 bg-primary/5 space-y-4">
                  <h3 className="font-semibold flex items-center gap-2"><Shield className="w-5 h-5 text-primary" /> Before You Confirm</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Confirmation sent to <strong>{minimalData ? formData.phone : (formData.email || formData.phone)}</strong></span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Court staff will have your <strong>name & {minimalData ? 'phone only' : 'contact info'}</strong></span></div>
                    <div className="flex items-start gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" /><span>Your data will be deleted after <strong>{court.retentionPeriod}</strong></span></div>
                  </div>
                  <div className="flex items-center gap-3 pt-2 border-t border-primary/20">
                    <input type="checkbox" id="privacy-ack" checked={privacyAck} onChange={e => setPrivacyAck(e.target.checked)} className="w-4 h-4 rounded accent-primary" />
                    <Label htmlFor="privacy-ack" className="text-sm cursor-pointer">I understand how my data will be used and agree to proceed</Label>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="outline" size="lg" onClick={() => setStep(2)} className="gap-2"><ChevronLeft className="w-4 h-4" /> Back to Edit</Button>
                  <Button size="lg" disabled={!privacyAck} onClick={handleConfirm} className="gap-2 min-w-[220px]">
                    <Check className="w-5 h-5" /> Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <BookingSummary courtName={court.name} courtLocation={court.location}
              date={selectedDate ? displayDate(selectedDate) : null} timeSlots={selectedSlots}
              duration={selectedSlots.length} players={parseInt(formData.players)} pricePerHour={court.price} />
          </div>
        </div>
      </div>
    </main></>
  );
}
