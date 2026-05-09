'use client';

import { Calendar, Clock, Users, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface BookingSummaryProps {
  courtName: string;
  courtLocation?: string;
  date: string | null;
  timeSlots: string[];
  duration: number;
  players: number;
  pricePerHour: number;
  children?: React.ReactNode;
}

export function BookingSummary({
  courtName,
  courtLocation,
  date,
  timeSlots,
  duration,
  players,
  pricePerHour,
  children,
}: BookingSummaryProps) {
  const subtotal = pricePerHour * duration;

  return (
    <Card className="sticky top-24 border-primary/20 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Booking Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Court */}
        <div>
          <p className="text-xs text-muted-foreground">Court</p>
          <p className="font-semibold">{courtName}</p>
          {courtLocation && (
            <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
              <MapPin className="w-3 h-3" />
              {courtLocation}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <p className="text-xs text-muted-foreground">Date</p>
          <p className="font-semibold">
            {date || <span className="text-muted-foreground italic">Select a date</span>}
          </p>
        </div>

        {/* Time Slots */}
        <div>
          <p className="text-xs text-muted-foreground">Time Slots</p>
          {timeSlots.length > 0 ? (
            <div className="flex flex-wrap gap-1.5 mt-1">
              {timeSlots.map((slot) => (
                <span
                  key={slot}
                  className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary font-medium px-2 py-1 rounded-md"
                >
                  <Clock className="w-3 h-3" />
                  {slot}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground italic">No slots selected</p>
          )}
        </div>

        {/* Duration */}
        <div>
          <p className="text-xs text-muted-foreground">Duration</p>
          <p className="font-semibold">{duration} hour{duration !== 1 ? 's' : ''}</p>
        </div>

        {/* Players */}
        {players > 0 && (
          <div>
            <p className="text-xs text-muted-foreground">Players</p>
            <p className="font-semibold flex items-center gap-1">
              <Users className="w-4 h-4 text-primary" />
              {players} player{players !== 1 ? 's' : ''}
            </p>
          </div>
        )}

        {/* Price Breakdown */}
        <div className="border-t border-border pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              Rp {pricePerHour.toLocaleString('id-ID')} × {duration} hour{duration !== 1 ? 's' : ''}
            </span>
            <span>Rp {subtotal.toLocaleString('id-ID')}</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-primary">Rp {subtotal.toLocaleString('id-ID')}</span>
          </div>
        </div>

        {/* Extra content (buttons etc.) */}
        {children}
      </CardContent>
    </Card>
  );
}
