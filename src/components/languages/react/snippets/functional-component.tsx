import React from 'react';
import { Box } from 'lucide-react';

export const functionalComponentSnippet = {
  id: 'component',
  name: 'Functional Component',
  icon: Box,
  description: 'Basic functional component with props',
  difficulty: 'Beginner' as const,
  tags: ['components', 'basics'],
  code: `import React from 'react';

function WelcomeCard({ name, role, avatar }) {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '2rem',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      maxWidth: '400px',
      margin: '2rem auto',
      textAlign: 'center'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        background: 'white',
        margin: '0 auto 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem'
      }}>
        {avatar || '👤'}
      </div>
      <h1 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>
        Welcome, {name}!
      </h1>
      <p style={{ margin: '0', opacity: 0.9, fontSize: '1.1rem' }}>
        {role}
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WelcomeCard name="Alex" role="React Developer" avatar="🚀" />);`
};
