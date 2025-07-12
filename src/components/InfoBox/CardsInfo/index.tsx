import { useEffect, useState } from 'react';
import BalanceHeader from './BalanceHeader';
import TabSwitcher from './TabSwitcher';
import CardCarousel from './CardCarousel';
import CardActions from './CardActions';
import CardInfoPanel from './CardInfoPanel';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../store';
import NewCardModal from './NewCardModal';
import { fetchCards } from '../../../store/slices/cardsSlice';
import { fetchTransactions } from '../../../store/slices/transactionsSlice';
import { useAppDispatch } from '../../../store/hooks';

const CardsInfo = () => {
    const dispatch = useAppDispatch();
    const cards = useSelector((state: RootState) => state.cards.cards);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('my-cards');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        dispatch(fetchCards());
        dispatch(fetchTransactions());
    }, [dispatch]);


    useEffect(() => {
        if (cards.length > 0 && currentIndex >= cards.length) {
            setCurrentIndex(0);
        }
    }, [cards, currentIndex]);

    const currentCard = cards[currentIndex];
    const totalBalance = cards.reduce((sum, card) => sum + card.balance, 0);

    return (
        <div>
            <BalanceHeader totalBalance={totalBalance} onNewCardClick={() => setShowModal(true)} />
            <TabSwitcher onTabChange={setActiveTab} />
            {
                activeTab === 'my-cards' && cards.length > 0
                    ? (
                        <div className="bg-white rounded-xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.08)] p-10 flex gap-10 w-full h-dvh">
                            <div className="flex flex-col gap-5 w-1/2">
                                <CardCarousel currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                                <CardActions cardId={currentCard.id} />
                            </div>
                            <div className="flex-1 flex flex-col gap-5">
                                <CardInfoPanel />
                            </div>
                        </div>
                    ) : (
                        <div>Company Cards Info</div>
                    )
            }
            {showModal && <NewCardModal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default CardsInfo;
