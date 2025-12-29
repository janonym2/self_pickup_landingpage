// components/ga/useTestUserGA.ts
'use client';
import { useEffect, useState } from 'react';

export function useTestUserGA() {
  const [isTestUser, setIsTestUser] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    if (params.get('test_user') === '1') {
      setIsTestUser(true);
      document.cookie = 'test_user=1; path=/; max-age=86400';
    } else if (document.cookie.includes('test_user=1')) {
      setIsTestUser(true);
    }

    if (isTestUser && window.gtag) {
      window.gtag('set', 'user_properties', { test_user: 'true' });
    }
  }, [isTestUser]);
}
