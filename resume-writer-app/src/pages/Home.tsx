import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import JobPostingInput from '../components/JobPostingInput';
import ResumeEditor from '../components/ResumeEditor/ResumeEditor';
import ResumePreview from '../components/ResumeEditor/ResumePreview';
import ExportButtons from '../components/ExportButtons';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <JobPostingInput />
                <ResumeEditor />
                <ResumePreview />
                <ExportButtons />
            </main>
            <Footer />
        </div>
    );
};

export default Home;