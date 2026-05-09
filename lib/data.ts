// Shared court data for the CourtBook prototype
// Used across homepage, court detail, and booking pages

export interface Court {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviews: number;
  price: number;
  type: 'Indoor' | 'Outdoor';
  floor: string;
  courts: number;
  image: string;
  privacyLevel: 'minimal' | 'standard' | 'full';
  facilities: string[];
  description: string;
  dataCollected: string[];
  dataNotCollected: string[];
  dataUsage: string[];
  retentionPeriod: string;
}

export const courts: Court[] = [
  {
    id: 1,
    name: 'GBK Arena (Senayan)',
    location: 'Jl. Pintu Satu Senayan, Jakarta Pusat',
    rating: 4.9,
    reviews: 1240,
    price: 180000,
    type: 'Indoor',
    floor: 'Wooden',
    courts: 12,
    image: 'https://gbk.id/upload/1643773794-gbk%20arena%202.jpg',
    privacyLevel: 'minimal',
    facilities: ['Parking', 'VIP Locker Room', 'Canteen', 'Pro Shop', 'AC', 'Shower', 'Prayer Room'],
    description: 'The iconic international-standard arena located within the Gelora Bung Karno sports complex. Features 12 premium wooden courts with professional lighting.',
    dataCollected: ['Your name (for booking confirmation)', 'Phone number (for check-in contact)', 'Booking time (for scheduling)'],
    dataNotCollected: ['Email (optional)', 'Payment card details (processed by secure provider)'],
    dataUsage: ['Send booking confirmation via SMS', 'Court staff contact for check-in', 'Keep record for 2 years (legal compliance)'],
    retentionPeriod: '2 years',
  },
  {
    id: 2,
    name: 'Supreme Arena Badminton',
    location: 'Jl. Karet Karya No.10, Jakarta Selatan',
    rating: 4.8,
    reviews: 856,
    price: 150000,
    type: 'Indoor',
    floor: 'Taraflex',
    courts: 8,
    image: 'https://admin.saraga.id/storage/images/20210914-172404_1631615837.jpg',
    privacyLevel: 'standard',
    facilities: ['Parking', 'Locker Room', 'Cafeteria', 'AC', 'Shower', 'Equipment Rental'],
    description: 'A modern, premium badminton facility known for its high-quality Taraflex flooring and excellent shock absorption. Favorite among professional players.',
    dataCollected: ['Your name (for booking)', 'Email (for confirmation)', 'Phone number (for support)', 'Booking history (for member rewards)'],
    dataNotCollected: ['Payment card details (processed by secure provider)'],
    dataUsage: ['Send booking confirmation', 'Share with court staff for check-in', 'Improve court availability predictions'],
    retentionPeriod: '2 years',
  },
  {
    id: 3,
    name: 'SR32 Badminton Setiabudi',
    location: 'Jl. Setiabudi Tengah No.32, Jakarta Selatan',
    rating: 4.7,
    reviews: 432,
    price: 130000,
    type: 'Indoor',
    floor: 'Vinyl',
    courts: 6,
    image: 'https://sports-sr32.com/_next/image?url=%2Ffields%2Fbadminton%2Fbadminton-1.jpg&w=1080&q=75',
    privacyLevel: 'minimal',
    facilities: ['Parking', 'Locker Room', 'Snack Bar', 'AC', 'Shower'],
    description: 'Strategically located in the heart of the business district. Features 6 tournament-standard vinyl courts. Perfect for after-work matches with colleagues.',
    dataCollected: ['Your name (for booking)', 'Phone number (for check-in)'],
    dataNotCollected: ['Email (optional)', 'Payment card details (secure provider)', 'Usage analytics'],
    dataUsage: ['Send booking confirmation via SMS', 'Court staff call for check-in'],
    retentionPeriod: '1 year',
  },
  {
    id: 4,
    name: 'Ancol Badminton Hall',
    location: 'Jl. Lodan Timur No.7, Jakarta Utara',
    rating: 4.6,
    reviews: 612,
    price: 100000,
    type: 'Indoor',
    floor: 'Wooden',
    courts: 10,
    image: 'https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2023/12/ancol.webp',
    privacyLevel: 'standard',
    facilities: ['Parking', 'Locker Room', 'Cafeteria', 'Seating Area', 'Shower'],
    description: 'Spacious hall with 10 well-maintained wooden courts. Located near the waterfront, offering a great atmosphere for group play and tournaments.',
    dataCollected: ['Your name (for booking)', 'Email (for confirmation)', 'Phone (for support)', 'Group size (for capacity)'],
    dataNotCollected: ['Payment card details (secure provider)'],
    dataUsage: ['Send booking confirmation', 'Share with court staff', 'Capacity planning'],
    retentionPeriod: '2 years',
  },
  {
    id: 5,
    name: 'Candra Wijaya Badminton Center',
    location: 'Jl. Raya Serpong No.15, Tangerang Selatan',
    rating: 4.9,
    reviews: 2167,
    price: 160000,
    type: 'Indoor',
    floor: 'Taraflex',
    courts: 15,
    image: 'https://asset.ayo.co.id/image/venue/168870419594397.image_cropper_1688704180302_large.jpg',
    privacyLevel: 'full',
    facilities: ['Parking', 'Professional Coaching', 'Locker Room', 'Restaurant', 'Gym'],
    description: 'Named after the Olympic gold medalist, this center provides professional-grade training and courts. One of the largest facilities in the Greater Jakarta area.',
    dataCollected: ['Your name (for booking)', 'Email (for confirmation)', 'Phone (for support)', 'Booking history (for analytics)', 'Skill level (for matchmaking)'],
    dataNotCollected: ['Payment card details (secure provider)'],
    dataUsage: ['Send confirmation', 'Share with management', 'Matchmaking suggestions', 'Usage analytics for improvements'],
    retentionPeriod: '3 years',
  },
  {
    id: 6,
    name: 'Badminton Hall Member (BHM)',
    location: 'Jl. Raya Kebayoran Lama, Jakarta Barat',
    rating: 4.5,
    reviews: 343,
    price: 90000,
    type: 'Indoor',
    floor: 'Vinyl',
    courts: 5,
    image: 'http://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2023/12/Badminton-Hall-Member.webp',
    privacyLevel: 'minimal',
    facilities: ['Parking', 'Seating Area', 'Snacks', 'Fan Cooling'],
    description: 'A cozy community-focused badminton hall known for its hospitality and clean vinyl courts. Great value for casual recreational play.',
    dataCollected: ['Your name (for booking)', 'Phone number (for check-in)'],
    dataNotCollected: ['Email (optional)', 'Payment card details (secure provider)', 'Location data'],
    dataUsage: ['Send booking confirmation via SMS', 'Court staff contact for check-in'],
    retentionPeriod: '1 year',
  },
];

export interface Booking {
  id: string;
  courtId: number;
  court: string;
  location: string;
  date: string;
  time: string;
  duration: number;
  players: number;
  price: number;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  createdAt: string;
  privacyLevel: 'minimal' | 'standard' | 'full';
  dataCollected: string[];
}

export const bookings: Booking[] = [
  {
    id: 'BK-2026-00142',
    courtId: 1,
    court: 'GBK Arena (Senayan)',
    location: 'Jl. Pintu Satu Senayan, Jakarta Pusat',
    date: 'Sat, 10 May 2026',
    time: '19:00 - 20:00',
    duration: 1,
    players: 4,
    price: 180000,
    status: 'confirmed',
    createdAt: '2026-05-07',
    privacyLevel: 'minimal',
    dataCollected: ['Name', 'Phone'],
  },
  {
    id: 'BK-2026-00143',
    courtId: 2,
    court: 'Supreme Arena Badminton',
    location: 'Jl. Karet Karya No.10, Jakarta Selatan',
    date: 'Sun, 11 May 2026',
    time: '14:00 - 16:00',
    duration: 2,
    players: 6,
    price: 300000,
    status: 'pending',
    createdAt: '2026-05-08',
    privacyLevel: 'standard',
    dataCollected: ['Name', 'Email', 'Phone', 'Booking History'],
  },
  {
    id: 'BK-2026-00139',
    courtId: 5,
    court: 'Candra Wijaya Badminton Center',
    location: 'Jl. Raya Serpong No.15, Tangerang Selatan',
    date: 'Fri, 9 May 2026',
    time: '18:00 - 19:00',
    duration: 1,
    players: 2,
    price: 160000,
    status: 'completed',
    createdAt: '2026-05-01',
    privacyLevel: 'full',
    dataCollected: ['Name', 'Email', 'Phone', 'Booking History', 'Skill Level'],
  },
];

export const timeSlots = [
  '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
  '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
  '18:00', '19:00', '20:00', '21:00', '22:00',
];

// Simulated booked slots for the prototype
export const bookedSlots: Record<string, { time: string; court: number }[]> = {
  '2026-05-10': [
    { time: '08:00', court: 1 },
    { time: '09:00', court: 1 },
    { time: '14:00', court: 2 },
    { time: '19:00', court: 1 },
    { time: '19:00', court: 3 },
    { time: '20:00', court: 1 },
  ],
  '2026-05-11': [
    { time: '10:00', court: 1 },
    { time: '14:00', court: 2 },
    { time: '15:00', court: 2 },
  ],
  '2026-05-12': [
    { time: '18:00', court: 1 },
    { time: '19:00', court: 1 },
    { time: '19:00', court: 2 },
    { time: '20:00', court: 1 },
    { time: '20:00', court: 2 },
    { time: '20:00', court: 3 },
  ],
};
