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
                className="flex justify-between items-center bg-[#F5F9FF] p-6 rounded-sm cursor-pointer drop-shadow-[0_0_0_rgba(0,0,0,0.04)]"
                onClick={() => setOpen(!open)}
            >
                <span className="font-light text-[#0C365A] text-sm flex gap-2 items-center">
                    <TransactionsIcon />
                    Recent transactions
                </span>
                <span>{open ? <DownArrowIcon /> : <DownArrowIcon className="rotate-180" />}</span>
            </div>
            {open && (
                <div>
                    <div className="p-4 bg-white rounded-b-sm shadow-inner font-light text-xs">
                        {(transactions).map((txn, idx) => (
                            <TransactionRow index={idx} key={idx} {...txn} />
                        ))}
                    </div>
                    <div className="bg-[#EDFFF5] text-[#01D167] text-sm font-medium flex justify-center p-5 border-[#DDFFEC] border-1 rounded">
                        <span>View all card transactions</span>
                    </div>
                </div>

            )}
        </div>
    );
};

export default TransactionsAccordion;
