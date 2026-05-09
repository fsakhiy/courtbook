'use client';

import { use } from 'react';
import { useState } from 'react';
import { Header } from '@/components/header';
import { PrivacyBadge } from '@/components/privacy-badge';
import { DataTransparencyPanel } from '@/components/data-transparency-panel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { courts } from '@/lib/data';
import {
  ArrowLeft,
  Star,
  MapPin,
  Check,
  Clock,
  Users,
  Shield,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CourtDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const court = courts.find((c) => c.id === parseInt(id));
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!court) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">Court not found</h1>
            <p className="text-muted-foreground mb-4">The court you&apos;re looking for doesn&apos;t exist.</p>
            <Link href="/">
              <Button>Back to Courts</Button>
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Courts
          </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-fade-in">
            {/* Court Image */}
            <div className="lg:col-span-2">
              <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden bg-gray-200">
                <Image
                  src={court.image}
                  alt={court.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/90 text-foreground backdrop-blur-sm">
                    {court.type}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Court Info */}
            <div className="lg:col-span-3 space-y-5">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h1 className="text-3xl font-bold">{court.name}</h1>
                  <div className="flex items-center gap-1.5 bg-yellow-50 dark:bg-yellow-950 px-3 py-1.5 rounded-lg shrink-0">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-lg">{court.rating}</span>
                    <span className="text-xs text-muted-foreground">({court.reviews})</span>
                  </div>
                </div>
                <p className="flex items-center gap-1.5 text-muted-foreground mt-1">
                  <MapPin className="w-4 h-4" />
                  {court.location}
                </p>
              </div>

              {/* Court Details Badges */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Court Details</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                    {court.type}
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1.5 text-sm">
                    {court.floor} Floor
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1.5 text-sm flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {court.courts} Courts Available
                  </Badge>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Description</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {court.description}
                </p>
              </div>

              {/* Facilities */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-2">Facilities</h3>
                <div className="flex flex-wrap gap-2">
                  {court.facilities.map((facility) => (
                    <span
                      key={facility}
                      className="inline-flex items-center gap-1.5 text-sm bg-primary/5 text-primary border border-primary/15 px-3 py-1.5 rounded-full"
                    >
                      <Check className="w-3.5 h-3.5" />
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground">per hour per court</p>
                  <p className="text-3xl font-bold text-primary">
                    Rp {court.price.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link href={`/court/${court.id}/book`}>
                    <Button size="lg" className="gap-2 text-base px-6">
                      <Clock className="w-5 h-5" />
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Transparency & Booking Section */}
        <div className="container mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Data Transparency Panel */}
            <div className="lg:col-span-3 space-y-6 animate-slide-up">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-bold">Privacy & Data Transparency</h2>
                </div>
                <DataTransparencyPanel
                  dataCollected={court.dataCollected}
                  dataNotCollected={court.dataNotCollected}
                  dataUsage={court.dataUsage}
                  retentionPeriod={court.retentionPeriod}
                  defaultOpen={true}
                />
              </div>

              {/* Privacy Badge */}
              <div className="flex items-center gap-3 p-4 bg-accent/50 rounded-xl border border-border">
                <PrivacyBadge level={court.privacyLevel} />
                <p className="text-sm text-muted-foreground">
                  {court.privacyLevel === 'minimal'
                    ? 'This court collects only the minimum data required for your booking.'
                    : court.privacyLevel === 'standard'
                    ? 'This court collects standard booking information.'
                    : 'This court collects additional data for analytics and improvements.'}
                </p>
              </div>
            </div>

            {/* Quick Book Sidebar */}
            <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="sticky top-24 p-6 border border-primary/20 rounded-xl bg-card shadow-sm space-y-4">
                <h3 className="font-bold text-lg">Quick Book</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price per hour</span>
                    <span className="font-semibold text-primary">
                      Rp {court.price.toLocaleString('id-ID')}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Available courts</span>
                    <span className="font-semibold">{court.courts}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Floor type</span>
                    <span className="font-semibold">{court.floor}</span>
                  </div>
                </div>
                <Link href={`/court/${court.id}/book`} className="block">
                  <Button className="w-full gap-2" size="lg">
                    <Clock className="w-5 h-5" />
                    Check Schedule & Book
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground text-center">
                  You&apos;ll be able to add group details in the next step
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
