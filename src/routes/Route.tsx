// src/routes.tsx

import { HomePage } from '@pages/HomePage';
import { VideoDetailPage } from '@pages/VideoDetailPage';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute'; // Assure-toi que le chemin est correct

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/comment-analyze-front/" element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      } />
      <Route path="/video/:id" element={
        <ProtectedRoute>
          <VideoDetailPage />
        </ProtectedRoute>
      } />
    </Routes>
  );
};
