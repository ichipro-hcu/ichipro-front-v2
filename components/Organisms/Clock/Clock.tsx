import * as React from 'react';
import { Card } from '@mantine/core';

export default function Clock() {
    const [time, setTime] = React.useState(new Date());
    React.useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = time.toLocaleTimeString();
    const formattedDate = time.toLocaleDateString(undefined, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'short',
    });

    return (
      <Card shadow="xs" padding="md" style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 24, marginBottom: 8 }}>{formattedTime}</div>
        <div style={{ fontSize: 16, marginBottom: 8 }}>{formattedDate}</div>
      </Card>
    );
}
