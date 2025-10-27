# Resume Writer App

This project is a Resume Writer application built with React and TypeScript. It allows users to generate tailored resumes based on job postings, input their job history, customize job descriptions, and export the final resume in PDF or DOC format.

## Features

- Input job posting text to tailor resumes.
- Manage job history and customize job descriptions.
- Preview the tailored resume in real-time.
- Export the resume in PDF or DOC format.

## Project Structure

```
resume-writer-app
├── src
│   ├── index.tsx               # Entry point of the application
│   ├── App.tsx                  # Main application component
│   ├── main.css                 # Global styles
│   ├── components               # Reusable components
│   │   ├── Header.tsx          # Header component
│   │   ├── Footer.tsx          # Footer component
│   │   ├── JobPostingInput.tsx  # Job posting input component
│   │   ├── ResumeEditor         # Resume editor components
│   │   │   ├── ResumeEditor.tsx # Resume editor logic
│   │   │   └── ResumePreview.tsx # Resume preview display
│   │   └── ExportButtons.tsx    # Export buttons for PDF/DOC
│   ├── pages                    # Page components
│   │   └── Home.tsx            # Home page component
│   ├── hooks                    # Custom hooks
│   │   └── useResume.ts        # Hook for managing resume state
│   ├── contexts                 # Context API for global state
│   │   └── ResumeContext.tsx   # Resume context provider
│   ├── services                 # Service functions
│   │   ├── ai.ts               # AI interaction for resume generation
│   │   └── export.ts           # Functions for exporting resumes
│   ├── utils                    # Utility functions
│   │   └── formatters.ts       # Formatting utilities
│   ├── types                    # TypeScript types
│   │   └── index.ts            # Type definitions
│   └── assets                   # Static assets
├── public
│   └── index.html              # Main HTML file
├── package.json                 # NPM configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── .gitignore                   # Git ignore file
└── README.md                   # Project documentation
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd resume-writer-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- Input the job posting text in the designated area.
- Fill in your job history and customize the job descriptions as needed.
- Preview your tailored resume in real-time.
- Use the export buttons to download your resume in the desired format.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.