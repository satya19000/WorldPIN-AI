'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { countries, type PostalRecord } from '@/lib/postal';
export default function PostalSearch() {
  const [query,setQuery]=useState(''); const [country,setCountry]=useState('ALL');
  const [results,setResults]=useState<PostalRecord[]>([]); const [busy,setBusy]=useState(false); const [searched,setSearched]=useState(false);
  async function handleSearch(e: React.FormEvent) {
    e.preventDefault(); if(!query.trim()) return;
    setBusy(true); setSearched(true);
    try { const r=await fetch('/api/search?q='+encodeURIComponent(query)+'&country='+encodeURIComponent(country)); const data=await r.json(); setResults(Array.isArray(data.results)?data.results:[]); }
    catch { setResults([]); } finally { setBusy(false); }
  }
  return <div className="w-full max-w-3xl mx-auto"><form onSubmit={handleSearch} className="bg-white shadow-xl rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-3">
    <label className="sr-only" htmlFor="country">Country</label><select id="country" className="rounded-xl border border-slate-200 px-4 py-3 bg-white text-slate-900" value={country} onChange={e=>setCountry(e.target.value)}><option value="ALL">All countries</option>{countries.map(c=><option value={c.code} key={c.code}>{c.flag} {c.name}</option>)}</select>
    <label className="sr-only" htmlFor="query">City or postal code</label><input id="query" required maxLength={100} className="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3" placeholder="Search city or postal code…" value={query} onChange={e=>setQuery(e.target.value)}/>
    <button disabled={busy} className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-700 text-white px-6 py-3 font-semibold hover:bg-sky-800 disabled:opacity-60"><Search size={18}/>{busy?'Searching…':'Search'}</button>
  </form>{searched&&<div aria-live="polite" className="mt-5 rounded-2xl bg-white shadow-sm border p-5 text-left"><h2 className="font-bold text-slate-900 mb-3">Results {results.length ? '('+results.length+')' : ''}</h2>{results.length? <div className="space-y-3">{results.map((r,i)=><article key={r.countryCode+'-'+r.code+'-'+i} className="border-b last:border-0 pb-3"><div className="font-semibold">{r.code} — {r.place}</div><div className="text-sm text-slate-600">{r.region}, {r.country}</div><Link href={'/country/'+(countries.find(c=>c.code===r.countryCode)?.slug ?? '')} className="text-sky-700 text-sm underline">Explore country</Link></article>)}</div>:<p className="text-slate-600">No match in the demonstration dataset. Full worldwide coverage is not loaded yet.</p>}</div>}</div>;
}
