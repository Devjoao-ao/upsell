import React from 'react';

export const CircleCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const FireIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071 1.052A9.75 9.75 0 0112 12.75v8.25a.75.75 0 01-1.5 0V12.75a9.75 9.75 0 01-1.071-8.412.75.75 0 00-1.052-1.072A11.25 11.25 0 003.75 12.75v8.25a.75.75 0 001.5 0V12.75a9.75 9.75 0 011.5-5.612A9.75 9.75 0 0112 3.75a9.75 9.75 0 015.25 3.388V12.75a.75.75 0 001.5 0V12.75a11.25 11.25 0 00-5.287-10.464z" clipRule="evenodd" />
    </svg>
);


export const CheckmarkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);
