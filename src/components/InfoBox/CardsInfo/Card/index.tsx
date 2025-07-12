import { useState } from "react";
import { ReactComponent as AspireLogo } from "../../../../assets/aspire.svg";
import { ReactComponent as VisaLogo } from "../../../../assets/visa.svg";
import { ReactComponent as EyeIcon } from "../../../../assets/eye.svg";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store";
import type { CardType } from "../../../../store/slices/cardsSlice";

interface CardProps {
    card: CardType;
}

const Card = ({ card }: CardProps) => {
    const frozen = useSelector((state: RootState) => {
        const current = state.cards.cards.find(c => c.id === card.id);
        return current?.frozen;
    });

    const [showFullNumber, setShowFullNumber] = useState(false);

    const toggleCardNumber = () => {
        setShowFullNumber((prev) => !prev);
    };

    return (
        <div className="flex flex-col">
            <button
                onClick={toggleCardNumber}
                className="text-xs font-bold text-[#01D167] flex justify-end mb-2"
            >
                <EyeIcon className="me-2" />
                {showFullNumber ? "Hide card number" : "Show card number"}
            </button>
            <div className={`bg-[#01D167] text-white rounded-2xl shadow-lg aspect-[8/5] p-8 flex flex-col justify-between overflow-hidden relative ${frozen ? 'bg-[#222222] opacity-30' : ''}`}>

                <div className="flex justify-end">
                    <div className="transform scale-75 origin-top-right">
                        <AspireLogo className="w-full h-auto object-contain" />
                    </div>
                </div>

                <div className="mt-2 font-semibold tracking-widest">
                    <p className="text-3xl">{card.name}</p>
                    <p className={`mt-5 min-h-[2.5rem] flex items-center ${showFullNumber ? '' : 'space-x-8'} leading-none word-spacing-wide`}>
                        {showFullNumber ? (
                            <span>{card.number.match(/.{1,4}/g)?.join(" ")}</span>
                        ) : (
                            <>
                                <span className="text-4xl">•••• •••• ••••</span>
                                <span>{card.number.slice(-4)}</span>
                            </>
                        )}
                    </p>
                    <div className="flex justify-start mt-2 gap-10">
                        <span>Thru: {card.expiry}</span>
                        <span>CVV: {card.cvv}</span>
                    </div>
                </div>

                <div className="text-right text-lg font-bold flex justify-end transform scale-120">
                    <VisaLogo className="w-26 h-auto inline-block" />
                </div>
            </div>
        </div>
    );
};

export default Card;
