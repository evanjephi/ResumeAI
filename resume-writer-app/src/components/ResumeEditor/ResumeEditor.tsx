import React, { useState, useContext } from 'react';
import { ResumeContext } from '../../contexts/ResumeContext';
import { JobHistory } from '../../types';

const ResumeEditor: React.FC = () => {
    const { resume, setResume } = useContext(ResumeContext);
    const [jobHistory, setJobHistory] = useState<JobHistory[]>(resume.jobHistory || []);

    const handleJobHistoryChange = (index: number, field: keyof JobHistory, value: string) => {
        const updatedJobHistory = [...jobHistory];
        updatedJobHistory[index] = { ...updatedJobHistory[index], [field]: value };
        setJobHistory(updatedJobHistory);
        setResume((prev) => ({ ...prev, jobHistory: updatedJobHistory }));
    };

    const addJob = () => {
        const newJob: JobHistory = { title: '', company: '', startDate: '', endDate: '', description: '' };
        setJobHistory([...jobHistory, newJob]);
    };

    const removeJob = (index: number) => {
        const updatedJobHistory = jobHistory.filter((_, i) => i !== index);
        setJobHistory(updatedJobHistory);
        setResume((prev) => ({ ...prev, jobHistory: updatedJobHistory }));
    };

    return (
        <div>
            <h2>Resume Editor</h2>
            {jobHistory.map((job, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder="Job Title"
                        value={job.title}
                        onChange={(e) => handleJobHistoryChange(index, 'title', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Company"
                        value={job.company}
                        onChange={(e) => handleJobHistoryChange(index, 'company', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Start Date"
                        value={job.startDate}
                        onChange={(e) => handleJobHistoryChange(index, 'startDate', e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="End Date"
                        value={job.endDate}
                        onChange={(e) => handleJobHistoryChange(index, 'endDate', e.target.value)}
                    />
                    <textarea
                        placeholder="Job Description"
                        value={job.description}
                        onChange={(e) => handleJobHistoryChange(index, 'description', e.target.value)}
                    />
                    <button onClick={() => removeJob(index)}>Remove Job</button>
                </div>
            ))}
            <button onClick={addJob}>Add Job</button>
        </div>
    );
};

export default ResumeEditor;