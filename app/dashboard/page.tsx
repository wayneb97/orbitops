'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function Dashboard() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from('bookings').select('*');
      if (!error) setBookings(data);
    };
    fetchBookings();
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 gap-4">
        {bookings.map((b: any) => (
          <div key={b.id} className="p-4 bg-white rounded shadow">
            <p><strong>Service:</strong> {b.service}</p>
            <p><strong>Start:</strong> {b.start_time}</p>
            <p><strong>Status:</strong> {b.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
