import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../../../../store/slices/cardsSlice";

interface NewCardModalProps {
  onClose: () => void;
}

const NewCardModal = ({ onClose }: NewCardModalProps) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    balance: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    const balance = parseFloat(form.balance);

    if (!form.name.trim()) {
      newErrors.name = "Cardholder name is required";
    }

    if (!form.balance || isNaN(balance) || balance <= 0) {
      newErrors.balance = "Balance must be greater than 0";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateCardNumber = () => {
    return Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
  };

  const generateExpiryDate = () => {
    const currentDate = new Date();
    const expiryYear = currentDate.getFullYear() + 2;
    const expiryMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    return `${expiryMonth}/${String(expiryYear).slice(-2)}`; // MM/YY
  };

  const generateCVV = () => {
    return String(Math.floor(100 + Math.random() * 900)); // 100 - 999
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const newCard = {
      id: Date.now(),
      name: form.name.trim(),
      number: generateCardNumber(),
      expiry: generateExpiryDate(),
      cvv: generateCVV(),
      frozen: false,
      balance: parseFloat(form.balance),
    };

    dispatch(addCard(newCard));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded w-96 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add New Card</h2>

        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Cardholder Name"
            className="w-full px-3 py-2 border rounded"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-3">
          <input
            type="number"
            name="balance"
            placeholder="Initial Balance (S$)"
            className="w-full px-3 py-2 border rounded"
            value={form.balance}
            onChange={handleChange}
          />
          {errors.balance && (
            <p className="text-red-500 text-xs mt-1">{errors.balance}</p>
          )}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-[#01D167] text-white rounded hover:bg-[#019e5a] text-sm"
          >
            Add Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewCardModal;
