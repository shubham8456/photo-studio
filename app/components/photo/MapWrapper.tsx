"use client";

import dynamic from 'next/dynamic';

const MiniMap = dynamic(() => import('./MiniMap'), { 
  ssr: false,
  loading: () => <div className="h-48 w-full bg-slate-200 animate-pulse rounded-lg" />
});

export default function MapWrapper({ lat, lng }: { lat: number; lng: number }) {
  return <MiniMap lat={lat} lng={lng} />;
}
