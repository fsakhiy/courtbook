'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { PrivacyBadge } from '@/components/privacy-badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Calendar, Clock, Users, MapPin, Trash2, Eye, Download, Shield, ChevronDown, Check } from 'lucide-react';
import { bookings } from '@/lib/data';
import Link from 'next/link';

const statusConfig = {
  confirmed: { label: 'Confirmed', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200', icon: '✓' },
  pending: { label: 'Pending', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200', icon: '⏱' },
  completed: { label: 'Completed', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200', icon: '★' },
  cancelled: { label: 'Cancelled', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200', icon: '✗' },
};

export default function MyBookings() {
  const [filter, setFilter] = useState('all');
  const [expandedData, setExpandedData] = useState<string | null>(null);
  const [cancelledIds, setCancelledIds] = useState<string[]>([]);

  const activeBookings = bookings.filter(b => !cancelledIds.includes(b.id));

  const filteredBookings = activeBookings.filter(booking => {
    if (filter === 'all') return true;
    return booking.status === filter;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">My Bookings</h1>
            <p className="text-muted-foreground">Manage and view all your court bookings</p>
          </div>

          <Tabs defaultValue="all" onValueChange={setFilter} className="w-full">
            <TabsList className="mb-6 w-full justify-start">
              <TabsTrigger value="all">All ({activeBookings.length})</TabsTrigger>
              <TabsTrigger value="confirmed">Confirmed ({activeBookings.filter(b => b.status === 'confirmed').length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({activeBookings.filter(b => b.status === 'pending').length})</TabsTrigger>
              <TabsTrigger value="completed">Completed ({activeBookings.filter(b => b.status === 'completed').length})</TabsTrigger>
            </TabsList>

            <TabsContent value={filter} className="space-y-4">
              {filteredBookings.length > 0 ? (
                <div className="space-y-4 stagger-children">
                  {filteredBookings.map(booking => (
                    <Card key={booking.id} className="hover:shadow-md transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <CardTitle className="text-lg">{booking.court}</CardTitle>
                            </div>
                            <CardDescription className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 shrink-0" />
                              <span className="truncate">{booking.location}</span>
                            </CardDescription>
                            <p className="text-xs text-muted-foreground mt-1 font-mono">ID: {booking.id}</p>
                          </div>
                          <Badge className={statusConfig[booking.status].color}>
                            {statusConfig[booking.status].icon} {statusConfig[booking.status].label}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Date</p>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span className="font-semibold text-sm">{booking.date}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Time</p>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4 text-primary" />
                              <span className="font-semibold text-sm">{booking.time}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Duration</p>
                            <span className="font-semibold text-sm">{booking.duration} hour{booking.duration > 1 ? 's' : ''}</span>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Group</p>
                            <div className="flex items-center gap-1.5">
                              <Users className="w-4 h-4 text-primary" />
                              <span className="font-semibold text-sm">{booking.players} players</span>
                            </div>
                          </div>
                        </div>

                        {/* Privacy Badge */}
                        <div className="flex items-center gap-3 p-3 bg-accent/50 rounded-lg">
                          <PrivacyBadge level={booking.privacyLevel} />
                          <span className="text-xs text-muted-foreground">Data collected: {booking.dataCollected.join(', ')}</span>
                        </div>

                        {/* Expandable Data Section */}
                        <button
                          onClick={() => setExpandedData(expandedData === booking.id ? null : booking.id)}
                          className="flex items-center gap-1.5 text-xs text-primary hover:underline"
                        >
                          <Shield className="w-3.5 h-3.5" />
                          What data did we collect?
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedData === booking.id ? 'rotate-180' : ''}`} />
                        </button>
                        {expandedData === booking.id && (
                          <div className="p-3 bg-primary/5 rounded-lg text-sm space-y-1.5 animate-fade-in border border-primary/10">
                            {booking.dataCollected.map((d, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 text-primary" />
                                <span>{d}</span>
                              </div>
                            ))}
                            <p className="text-xs text-muted-foreground mt-2">This data is shared with court staff for check-in only.</p>
                          </div>
                        )}

                        {/* Price and Actions */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <div>
                            <p className="text-xs text-muted-foreground">Total</p>
                            <p className="text-2xl font-bold text-primary">Rp {booking.price.toLocaleString('id-ID')}</p>
                          </div>
                          <div className="flex gap-2 flex-wrap justify-end">
                            <Button variant="outline" size="sm" className="gap-1.5">
                              <Download className="w-3.5 h-3.5" /> Receipt
                            </Button>
                            <Link href={`/court/${booking.courtId}`}>
                              <Button variant="outline" size="sm" className="gap-1.5">
                                <Eye className="w-3.5 h-3.5" /> Details
                              </Button>
                            </Link>
                            {booking.status !== 'completed' && (
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="destructive" size="sm" className="gap-1.5">
                                    <Trash2 className="w-3.5 h-3.5" /> Cancel
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogTitle>Cancel Booking</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to cancel this booking at <strong>{booking.court}</strong>? This action cannot be undone. Your personal data for this booking will be deleted within 30 days.
                                  </AlertDialogDescription>
                                  <div className="flex justify-end gap-2">
                                    <AlertDialogCancel>Keep Booking</AlertDialogCancel>
                                    <AlertDialogAction
                                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                      onClick={() => setCancelledIds(prev => [...prev, booking.id])}
                                    >
                                      Cancel Booking
                                    </AlertDialogAction>
                                  </div>
                                </AlertDialogContent>
                              </AlertDialog>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="animate-fade-in">
                  <CardContent className="py-16 text-center">
                    <Calendar className="w-16 h-16 mx-auto text-muted-foreground/20 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No bookings yet</h3>
                    <p className="text-muted-foreground mb-6">Start booking badminton courts to see them here</p>
                    <Link href="/"><Button className="gap-2">Browse Courts</Button></Link>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </>
  );
}
