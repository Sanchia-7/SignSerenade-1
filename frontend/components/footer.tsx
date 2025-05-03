import React from 'react';

//frontend/components/footer.tsx
const Footer: React.FC = () => {
    return (
        <footer className="text-center p-4 italic bg-black/90 text-sm text-white">
            <p>&copy; {new Date().getFullYear()} SignSerenade:Your Voice in Signs | Developed by Cows🐮🐄</p>
        </footer>
    );
};

export default Footer;