import { ReactComponent as PlusIcon } from "../../../../assets/plus.svg";

interface BalanceHeaderProps {
  totalBalance: number;
  onNewCardClick: () => void;
}

const BalanceHeader = ({ totalBalance, onNewCardClick }: BalanceHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <p className="text-sm text-gray-600">Available balance</p>
        <div className="flex items-center space-x-2 mt-2">
          <span className="bg-[#01D167] text-white text-xs px-2 py-1 rounded">S$</span>
          <span className="text-2xl font-bold">{totalBalance.toLocaleString()}</span>
        </div>
      </div>
      <button className="flex items-center gap-2 bg-[#325BAF] text-white px-3 py-2 rounded-md text-sm font-medium" onClick={onNewCardClick}>
        <PlusIcon />
        New card
      </button>
    </div>
  );
};

export default BalanceHeader;
