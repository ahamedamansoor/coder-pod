'use client';
import React from 'react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

interface JavaArrayListProps {
  onOpenEditor: (code: string) => void;
}

export function JavaArrayList({ onOpenEditor }: JavaArrayListProps) {
  return (
    <div id="java-arraylist-page" data-test="java-arraylist-page">
        <Card>
            <CardHeader>
                <CardTitle className="text-4xl font-bold">ArrayList</CardTitle>
            </CardHeader>
        </Card>
    </div>
  );
}
