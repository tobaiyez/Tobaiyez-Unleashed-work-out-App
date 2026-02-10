import React, { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import WorkoutTracker from './components/WorkoutTracker';
import NutritionTracker from './components/NutritionTracker';
import AIAdvisor from './components/AIAdvisor';
import Recovery from './components/Recovery';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard />;
      case View.WORKOUT:
        return <WorkoutTracker />;
      case View.NUTRITION:
        return <NutritionTracker />;
      case View.ADVISOR:
        return <AIAdvisor />;
      case View.RECOVERY:
        return <Recovery />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setCurrentView}>
      {renderView()}
    </Layout>
  );
};

export default App;
