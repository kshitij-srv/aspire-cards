import { useState } from 'react';
import TransactionRow from '../TransactionRow';
import { ReactComponent as DownArrowIcon } from "../../../../assets/down-arrow.svg";
import { ReactComponent as TransactionsIcon } from "../../../../assets/transactions.svg";
import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store';

const TransactionsAccordion = () => {
    const [open, setOpen] = useState(true);
    const transactions = useSelector((state: RootState) => state.transactions.transactions);

    return (
        <div>
            <div
                className="flex justify-between items-center bg-[#F5F9FF] p-6 rounded cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <span className="font-light text-[#0C365A] text-sm flex gap-2 items-center">
                    <TransactionsIcon />
                    Recent transactions
                </span>
                <span>{open ? <DownArrowIcon /> : <DownArrowIcon className="rotate-180" />}</span>
            </div>
            {open && (
                <div className="p-4 bg-white rounded-b shadow-inner font-light text-xs">
                    {(transactions).map((txn, idx) => (
                        <TransactionRow index={idx} key={idx} {...txn} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TransactionsAccordion;
