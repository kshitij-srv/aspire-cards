import { useState } from 'react';

const TabSwitcher = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
  const [activeTab, setActiveTab] = useState('my-cards');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <div className="flex space-x-6  mb-6">
      <button
        className={`pb-2 text=[#222222] ${activeTab === 'my-cards' ? 'font-medium border-b-2 border-[#23CEFD]' : 'opacity-30'}`}
        onClick={() => handleClick('my-cards')}
      >
        My debit cards
      </button>
      <button
        className={`pb-2 text=[#222222] ${activeTab === 'company-cards' ? 'font-medium border-b-2 border-[#23CEFD]' : 'opacity-30'}`}
        onClick={() => handleClick('company-cards')}
      >
        All company cards
      </button>
    </div>
  );
};

export default TabSwitcher;
