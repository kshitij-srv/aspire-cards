import { ReactComponent as FlightIcon } from '../../../../assets/flights.svg';
import { ReactComponent as FileStorageIcon } from '../../../../assets/file-storage.svg';
import { ReactComponent as MegaphoneIcon } from '../../../../assets/megaphone.svg';
import { ReactComponent as BusinessAndFinanceIcon } from '../../../../assets/business-and-finance.svg';

export interface TransactionRowProps {
    index: number;
    label: string;
    date: string;
    amount: string;
    type: string;
    subLabel: string;
}

const iconList = [
    <FileStorageIcon />,
    <FlightIcon />,
    <MegaphoneIcon />,
];

const getIconByIndex = (index: number) => {
    return iconList[index % iconList.length];
};

const TransactionRow = ({ index, label, date, amount, type, subLabel }: TransactionRowProps) => {
    const currentIcon = getIconByIndex(index);

    return (
        <div className="flex items-start space-x-3 py-3 border-b border-[#F5F5F5] last:border-b-0 text-sm">
            <div className="w-10 h-10 bg-[#009DFF1A] rounded-full flex items-center justify-center text-[#325BAF]">
                {currentIcon}
            </div>

            <div className="flex-1 text-sm space-y-1">
                <div className="font-medium text-[#222222]">{label}</div>
                <div className="text-[#AAAAAA]">{date}</div>
                <div className="flex space-x-2 text-xs font-medium text-[#325BAF] mt-2 items-center">
                    <div className="w-5 h-5 bg-[#325BAF] rounded-full flex items-center justify-center">
                        <BusinessAndFinanceIcon className="w-2.5 h-2" />
                    </div>
                    <div>{subLabel}</div>
                </div>
            </div>

            <div className={`text-sm font-medium ${type === 'credit' ? 'text-[#01D167]' : 'text-[#222222]'}`}>
                {amount}
            </div>
        </div>
    );
};

export default TransactionRow;
