// components/ga/TestUserMarker.tsx
'use client';
import { useTestUserGA } from './useTestUserGA';

export default function TestUserMarker() {
  useTestUserGA();
  return null;
}
