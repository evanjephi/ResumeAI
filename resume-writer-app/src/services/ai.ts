import axios from 'axios';

const AI_API_URL = 'https://api.example.com/generate-resume'; // Replace with actual AI service URL

export const generateTailoredResume = async (jobPostingText: string, jobHistory: any) => {
    try {
        const response = await axios.post(AI_API_URL, {
            jobPosting: jobPostingText,
            jobHistory: jobHistory,
        });
        return response.data;
    } catch (error) {
        console.error('Error generating tailored resume:', error);
        throw new Error('Failed to generate resume');
    }
};