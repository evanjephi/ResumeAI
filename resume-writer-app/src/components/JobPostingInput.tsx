import React, { useState } from 'react';

const JobPostingInput: React.FC<{ onJobPostingChange: (text: string) => void }> = ({ onJobPostingChange }) => {
    const [jobPostingText, setJobPostingText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setJobPostingText(event.target.value);
        onJobPostingChange(event.target.value);
    };

    return (
        <div className="job-posting-input">
            <h2>Job Posting Input</h2>
            <textarea
                value={jobPostingText}
                onChange={handleChange}
                placeholder="Paste the job posting text here..."
                rows={10}
                cols={50}
            />
        </div>
    );
};

export default JobPostingInput;