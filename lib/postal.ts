export type PostalRecord = { countryCode: string; country: string; code: string; place: string; region: string; latitude?: number; longitude?: number };
export const countries = [
  { code: 'IN', name: 'India', slug: 'india', flag: '🇮🇳' },
  { code: 'US', name: 'United States', slug: 'united-states', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', slug: 'united-kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', slug: 'canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', slug: 'australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', slug: 'germany', flag: '🇩🇪' },
  { code: 'JP', name: 'Japan', slug: 'japan', flag: '🇯🇵' },
  { code: 'AE', name: 'United Arab Emirates', slug: 'united-arab-emirates', flag: '🇦🇪' },
] as const;
// Demo entries only. Replace with verified licensed data before advertising full coverage.
export const sampleRecords: PostalRecord[] = [
  { countryCode: 'IN', country: 'India', code: '533001', place: 'Kakinada', region: 'Andhra Pradesh', latitude: 16.9891, longitude: 82.2475 },
  { countryCode: 'US', country: 'United States', code: '10001', place: 'New York', region: 'New York', latitude: 40.7506, longitude: -73.9972 },
  { countryCode: 'GB', country: 'United Kingdom', code: 'SW1A 1AA', place: 'London', region: 'England', latitude: 51.501, longitude: -0.1416 },
  { countryCode: 'CA', country: 'Canada', code: 'K1A 0B1', place: 'Ottawa', region: 'Ontario', latitude: 45.4215, longitude: -75.6972 },
  { countryCode: 'AU', country: 'Australia', code: '2000', place: 'Sydney', region: 'New South Wales', latitude: -33.8688, longitude: 151.2093 },
  { countryCode: 'DE', country: 'Germany', code: '10115', place: 'Berlin', region: 'Berlin', latitude: 52.532, longitude: 13.3849 },
  { countryCode: 'JP', country: 'Japan', code: '100-0001', place: 'Chiyoda', region: 'Tokyo', latitude: 35.6812, longitude: 139.7671 },
];
export function searchPostal(query: string, country?: string): PostalRecord[] {
  const q = query.normalize('NFKC').trim().toLowerCase().slice(0, 100);
  if (!q) return [];
  const qCode = q.replace(/[\s-]/g, '');
  return sampleRecords.filter(r =>
    (!country || country === 'ALL' || r.countryCode === country.toUpperCase()) &&
    (r.code.toLowerCase().replace(/[\s-]/g, '').includes(qCode) ||
    r.place.toLowerCase().includes(q) || r.region.toLowerCase().includes(q))
  ).slice(0, 30);
}
export function countryBySlug(slug: string) { return countries.find(c => c.slug === slug); }
