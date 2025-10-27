import React, { createContext, useState, ReactNode, useContext } from 'react';

export type JobEntry = {
    id: string;
    company: string;
    title?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
};

export type ResumeState = {
    jobHistory: JobEntry[];
    jobPostingText: string;
    summary: string;
    objective: string;
    skills: string[];
};

export const defaultResumeState: ResumeState = {
    jobHistory: [],
    jobPostingText: '',
    summary: '',
    objective: '',
    skills: [],
};

// Named export expected by your imports:
export const ResumeContext = createContext<{
    state: ResumeState;
    setState: React.Dispatch<React.SetStateAction<ResumeState>>;
}>({
    state: defaultResumeState,
    setState: () => {},
});

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<ResumeState>(defaultResumeState);
    return (
        <ResumeContext.Provider value={{ state, setState }}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResumeContext = (): {
    state: ResumeState;
    setState: React.Dispatch<React.SetStateAction<ResumeState>>;
} => {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error('useResumeContext must be used within a ResumeProvider');
    }
    return context;
};