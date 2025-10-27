import React from 'react';
import { useResume } from '../../hooks/useResume';

const ResumePreview: React.FC = () => {
    const { resume } = useResume();

    return (
        <div className="resume-preview">
            <h2>Resume Preview</h2>
            <div className="resume-content">
                <h3>{resume.name}</h3>
                <p>{resume.contactInfo}</p>
                <h4>Experience</h4>
                <ul>
                    {resume.jobHistory.map((job, index) => (
                        <li key={index}>
                            <strong>{job.title}</strong> at {job.company} ({job.dates})
                            <p>{job.description}</p>
                        </li>
                    ))}
                </ul>
                <h4>Education</h4>
                <ul>
                    {resume.education.map((edu, index) => (
                        <li key={index}>
                            <strong>{edu.degree}</strong> from {edu.institution} ({edu.dates})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResumePreview;