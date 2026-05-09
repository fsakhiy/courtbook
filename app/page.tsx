'use client';

import { useState } from 'react';
import { Search, MapPin, Star, Clock, Users, Filter, Shield } from 'lucide-react';
import { Header } from '@/components/header';
import { PrivacyBadge } from '@/components/privacy-badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { courts } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string[]>([]);
  const [selectedFloor, setSelectedFloor] = useState<string[]>([]);
  const [selectedFacilities, setSelectedFacilities] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState('rating');

  const allFacilities = [...new Set(courts.flatMap(c => c.facilities))].sort();

  const filteredCourts = courts.filter(court => {
    const matchesSearch = court.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      court.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType.length === 0 || selectedType.includes(court.type);
    const matchesFloor = selectedFloor.length === 0 || selectedFloor.includes(court.floor);
    const matchesPrice = court.price >= priceRange[0] && court.price <= priceRange[1];
    const matchesFacilities = selectedFacilities.length === 0 || selectedFacilities.every(f => court.facilities.includes(f));
    return matchesSearch && matchesType && matchesFloor && matchesPrice && matchesFacilities;
  });

  const sortedCourts = [...filteredCourts].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'price') return a.price - b.price;
    return 0;
  });

  const toggleFilter = (value: string, setState: any, state: string[]) => {
    setState(state.includes(value) ? state.filter(v => v !== value) : [...state, value]);
  };

  const hasFilters = selectedType.length > 0 || selectedFloor.length > 0 || selectedFacilities.length > 0 || priceRange[0] > 0 || priceRange[1] < 200000;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-14 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIi8+PC9zdmc+')] opacity-60" />
          <div className="container mx-auto px-4 relative">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 animate-fade-in">
              Find Your Perfect Badminton Court
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Book courts with real-time availability across Jakarta
            </p>
            <div className="relative max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by court name, location, or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-13 text-base bg-white text-foreground border-0 shadow-lg rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Privacy Banner */}
        <div className="border-b border-border bg-primary/5">
          <div className="container mx-auto px-4 py-2.5 flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground">Your search history is <strong className="text-foreground">private</strong> and automatically deleted after 30 days</span>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Filter className="w-5 h-5 text-primary" /> Filters
                  </h3>
                </div>

                {/* Court Type */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Court Type</h4>
                  <div className="space-y-2">
                    {['Indoor', 'Outdoor'].map(type => (
                      <div key={type} className="flex items-center gap-2">
                        <Checkbox id={`type-${type}`} checked={selectedType.includes(type)} onCheckedChange={() => toggleFilter(type, setSelectedType, selectedType)} />
                        <Label htmlFor={`type-${type}`} className="cursor-pointer text-sm">{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floor Material */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Floor Material</h4>
                  <div className="space-y-2">
                    {['Taraflex', 'Vinyl', 'Concrete', 'Wooden', 'Synthetic'].map(floor => (
                      <div key={floor} className="flex items-center gap-2">
                        <Checkbox id={`floor-${floor}`} checked={selectedFloor.includes(floor)} onCheckedChange={() => toggleFilter(floor, setSelectedFloor, selectedFloor)} />
                        <Label htmlFor={`floor-${floor}`} className="cursor-pointer text-sm">{floor}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Price Range (Rp {priceRange[0].toLocaleString('id-ID')} - Rp {priceRange[1].toLocaleString('id-ID')})</h4>
                  <Slider value={priceRange} onValueChange={setPriceRange} min={0} max={200000} step={10000} className="w-full" />
                </div>

                {/* Facilities */}
                <div>
                  <h4 className="font-semibold text-sm mb-3">Facilities</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {allFacilities.map(fac => (
                      <div key={fac} className="flex items-center gap-2">
                        <Checkbox id={`fac-${fac}`} checked={selectedFacilities.includes(fac)} onCheckedChange={() => toggleFilter(fac, setSelectedFacilities, selectedFacilities)} />
                        <Label htmlFor={`fac-${fac}`} className="cursor-pointer text-sm">{fac}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasFilters && (
                  <Button variant="outline" className="w-full" onClick={() => { setSelectedType([]); setSelectedFloor([]); setSelectedFacilities([]); setPriceRange([0, 200000]); }}>
                    Clear All Filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Courts Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{sortedCourts.length}</span> courts found {searchQuery && `for "${searchQuery}"`}
                </p>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-3 py-2 border border-border rounded-lg text-sm bg-background">
                  <option value="rating">Highest Rating</option>
                  <option value="price">Lowest Price</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
                {sortedCourts.map(court => (
                  <Card key={court.id} className="overflow-hidden group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
                    {/* Court Image */}
                    <Link href={`/court/${court.id}`}>
                      <div className="relative h-48 overflow-hidden bg-gray-200">
                        <Image src={court.image} alt={court.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute top-3 right-3">
                          <span className="bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-semibold">{court.type}</span>
                        </div>
                      </div>
                    </Link>

                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <Link href={`/court/${court.id}`}>
                            <CardTitle className="text-lg hover:text-primary transition-colors cursor-pointer truncate">{court.name}</CardTitle>
                          </Link>
                          <CardDescription className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3.5 h-3.5 shrink-0" />
                            <span className="truncate">{court.location}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-950 px-2 py-1 rounded-lg shrink-0">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-bold">{court.rating}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-md">{court.floor}</span>
                        <span className="text-xs font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md">{court.courts} Courts</span>
                      </div>

                      {/* Facilities Preview */}
                      <div className="flex flex-wrap gap-1">
                        {court.facilities.slice(0, 3).map(f => (
                          <span key={f} className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{f}</span>
                        ))}
                        {court.facilities.length > 3 && (
                          <span className="text-xs text-primary font-medium px-2 py-0.5">+{court.facilities.length - 3} more</span>
                        )}
                      </div>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div>
                          <p className="text-2xl font-bold text-primary">Rp {court.price.toLocaleString('id-ID')}</p>
                          <p className="text-xs text-muted-foreground">per hour</p>
                        </div>
                        <Link href={`/court/${court.id}`}>
                          <Button className="gap-2 shadow-sm">
                            <Clock className="w-4 h-4" /> Check Schedule
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {sortedCourts.length === 0 && (
                <div className="text-center py-16 animate-fade-in">
                  <Search className="w-12 h-12 mx-auto text-muted-foreground/30 mb-4" />
                  <p className="text-lg font-semibold mb-1">No courts found</p>
                  <p className="text-muted-foreground mb-6">Try adjusting your filters or search query</p>
                  <Button variant="outline" onClick={() => { setSelectedType([]); setSelectedFloor([]); setSelectedFacilities([]); setPriceRange([0, 200000]); setSearchQuery(''); }}>
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
