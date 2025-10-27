export const formatJobHistory = (jobHistory) => {
    return jobHistory.map(job => ({
        title: job.title,
        company: job.company,
        startDate: new Date(job.startDate).toLocaleDateString(),
        endDate: job.endDate ? new Date(job.endDate).toLocaleDateString() : 'Present',
        description: job.description.split('\n').map(line => `- ${line}`).join('\n')
    }));
};

export const formatResume = (resumeData) => {
    return {
        name: resumeData.name,
        contact: resumeData.contact,
        jobHistory: formatJobHistory(resumeData.jobHistory),
        skills: resumeData.skills.join(', '),
        summary: resumeData.summary
    };
};

export const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};