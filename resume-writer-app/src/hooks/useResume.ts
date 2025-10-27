import { useContext } from 'react';
import { ResumeContext } from '../contexts/ResumeContext';

// Named export expected by your imports:
export function useResume() {
    const ctx = useContext(ResumeContext);
    if (!ctx) throw new Error('useResume must be used within a ResumeProvider');
    return ctx;
}