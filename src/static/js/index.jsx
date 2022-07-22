import React from 'react';
import { createRoot } from 'react-dom/client';
import Work from './pages/work';
import '../style/base.scss';

const root = createRoot(document.getElementById('root'));
root.render(<Work />);
