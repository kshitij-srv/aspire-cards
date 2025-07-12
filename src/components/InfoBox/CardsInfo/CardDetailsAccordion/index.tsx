import { useState } from 'react';
import { ReactComponent as DownArrowIcon } from "../../../../assets/down-arrow.svg";
import { ReactComponent as CardDetailsIcon } from "../../../../assets/card-details.svg";

const CardDetailsAccordion = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center bg-[#F5F9FF] p-6 rounded cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="font-light text-[#0C365A] text-sm flex gap-2 items-center">
            <CardDetailsIcon />
            Card details
        </span>
        <span>{open ? <DownArrowIcon /> : <DownArrowIcon className="rotate-180"/>}</span>
      </div>
      {open && (
        <div className="p-6 bg-white rounded-b shadow-inner text-sm font-light">
          <p>Cardholder: Mark Henry</p>
          <p>Card type: VISA</p>
          <p>Expires: 12/20</p>
        </div>
      )}
    </div>
  );
};

export default CardDetailsAccordion;
