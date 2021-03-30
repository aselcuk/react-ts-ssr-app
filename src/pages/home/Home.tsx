import { Button } from '@components';
import React from 'react';

export default function Home() {
  return (
    <div style={{ alignItems: 'center', display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <Button
        primary
      >
        GİRİŞ
    </Button>

      <Button
        secondary
      >
        ÜYE OL
    </Button>
    </div>
  );
}
