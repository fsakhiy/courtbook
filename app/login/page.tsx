'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Eye, EyeOff, AlertCircle, Shield } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e: Record<string, string> = {};
    if (!email.trim()) e.email = 'Email is required';
    if (!password) e.password = 'Password is required';
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Prototype: redirect to homepage
      window.location.href = '/';
    }
  };

  return (
    <><Header /><main className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-scale-in">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold mb-1">Welcome Back</h1>
          <p className="text-muted-foreground">Log in to manage your bookings</p>
        </div>

        <form onSubmit={handleSubmit} className="border border-border rounded-xl p-6 bg-card space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={e => { setEmail(e.target.value); setErrors(p => ({ ...p, email: '' })); }} className={errors.email ? 'border-destructive' : ''} />
            {errors.email && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input id="password" type={showPw ? 'text' : 'password'} placeholder="Enter your password" value={password} onChange={e => { setPassword(e.target.value); setErrors(p => ({ ...p, password: '' })); }} className={errors.password ? 'border-destructive pr-10' : 'pr-10'} />
              <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-destructive flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" checked={remember} onCheckedChange={(c) => setRemember(!!c)} />
              <Label htmlFor="remember" className="text-sm cursor-pointer">Remember me</Label>
            </div>
            <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
          </div>

          <Button type="submit" className="w-full" size="lg">Log In</Button>

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account? <Link href="/signup" className="text-primary hover:underline font-medium">Sign up</Link>
          </p>
        </form>

        {/* Privacy Notice */}
        <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/15 flex items-start gap-2">
          <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <p className="text-xs text-muted-foreground">
            Your login session is encrypted. We auto-logout after 15 minutes of inactivity for your security.
          </p>
        </div>
      </div>
    </main></>
  );
}
