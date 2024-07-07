'use client';

export default function myImageLoader({ src, width, quality }) {
    return `http://localhost:3001${src}?w=${width}&q=${quality || 75}`
  }
