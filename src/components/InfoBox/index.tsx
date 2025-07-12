import { Routes, Route, Navigate } from "react-router-dom";
import HomeInfo from "./HomeInfo";
import CardsInfo from "./CardsInfo";
import PaymentsInfo from "./PaymentsInfo";
import CreditInfo from "./CreditInfo";
import Settings from "./Settings";

const InfoBox = () => {
    return (
        <div className="flex-1 p-10 bg-white">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<HomeInfo />} />
                <Route path="/cards" element={<CardsInfo />} />
                <Route path="/payments" element={<PaymentsInfo />} />
                <Route path="/credit" element={<CreditInfo />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
};

export default InfoBox;