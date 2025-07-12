import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as DeactivateCardIcon } from "../../../../assets/deactivate-card.svg"
import { ReactComponent as FreezeCardIcon } from "../../../../assets/freeze-card.svg"
import { ReactComponent as GPayLogo } from "../../../../assets/gpay.svg"
import { ReactComponent as ReplaceCardIcon } from "../../../../assets/replace-card.svg";
import { ReactComponent as SetSpendLimitIcon } from "../../../../assets/set-spend-limit.svg";
import { toggleFreezeCard } from "../../../../store/slices/cardsSlice";
import type { RootState } from "../../../../store";

interface CardActionsProps {
    cardId: number;
}

const ActionIcon = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center justify-center w-8 h-8">
        {children}
    </span>
);

const CardActions = ({ cardId }: CardActionsProps) => {
    const dispatch = useDispatch();

    const isFrozen = useSelector((state: RootState) =>
        state.cards.cards.find((c) => c.id === cardId)?.frozen
    );

    const handleFreeze = () => {
        dispatch(toggleFreezeCard(cardId));
    };

    const actions = [
        { key: "freeze", label: isFrozen ? "Unfreeze card" : "Freeze card", icon: FreezeCardIcon },
        { key: "limit", label: 'Set spend limit', icon: SetSpendLimitIcon },
        { key: "gpay", label: 'Add to GPay', icon: GPayLogo },
        { key: "replace", label: 'Replace card', icon: ReplaceCardIcon },
        { key: "cancel", label: 'Cancel card', icon: DeactivateCardIcon },
    ];

    return (
        <div className="flex justify-around bg-[#EDF3FF] rounded-lg py-4 mt-4">
            {actions.map(({ key, label, icon: Icon }) => {
                const isFreezeAction = key === 'freeze';
                return (
                    (
                        <button key={label} className="cursor-pointer flex flex-col items-center text-sm text-gray-700 w-20" onClick={isFreezeAction ? handleFreeze : undefined}>
                            <ActionIcon>
                                <Icon className="fill-current" />
                            </ActionIcon>
                            <span className="mt-1 text-center text-[#0C365A] text-xs">{label}</span>
                        </button>
                    )
                );
            })}
        </div>
    );
};

export default CardActions;
