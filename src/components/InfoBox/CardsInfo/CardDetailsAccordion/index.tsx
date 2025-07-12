import { useState } from 'react';
import { ReactComponent as DownArrowIcon } from "../../../../assets/down-arrow.svg";
import { ReactComponent as CardDetailsIcon } from "../../../../assets/card-details.svg";
import type { CardType } from '../../../../store/slices/cardsSlice';

interface CardDetailsAccordionProps {
    card: CardType;
}

const CardDetailsAccordion = ({ card }: CardDetailsAccordionProps) => {
    const [open, setOpen] = useState(true);

    return (
        <div className="mb-4">
            <div
                className="flex justify-between items-center bg-[#F5F9FF] p-6 rounded-sm cursor-pointer drop-shadow-[0_0_0_rgba(0,0,0,0.04)]"
                onClick={() => setOpen(!open)}
            >
                <span className="font-light text-[#0C365A] text-sm flex gap-2 items-center">
                    <CardDetailsIcon />
                    Card details
                </span>
                <span>{open ? <DownArrowIcon /> : <DownArrowIcon className="rotate-180" />}</span>
            </div>
            {open && (
                <div className="p-6 bg-white rounded-b-sm shadow-inner text-sm font-light space-y-1">
                    <p><strong>Cardholder:</strong> {card.name}</p>
                    <p><strong>Card number:</strong> **** **** **** {card.number.slice(-4)}</p>
                    <p><strong>Card type:</strong> VISA</p>
                    <p><strong>Expires:</strong> {card.expiry}</p>
                    <p><strong>CVV:</strong> ***</p>
                </div>
            )}
        </div>
    );
};

export default CardDetailsAccordion;
