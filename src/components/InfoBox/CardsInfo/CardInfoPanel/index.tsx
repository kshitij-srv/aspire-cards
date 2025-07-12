import type { CardType } from '../../../../store/slices/cardsSlice';
import CardDetailsAccordion from '../CardDetailsAccordion';
import TransactionsAccordion from '../TransactionsAccordion';

interface CardInfoPanelProps {
  card: CardType;
}

const CardInfoPanel = ({ card }: CardInfoPanelProps) => {
  return (
    <div>
      <CardDetailsAccordion card={card} />
      <TransactionsAccordion />
    </div>
  );
};

export default CardInfoPanel;
