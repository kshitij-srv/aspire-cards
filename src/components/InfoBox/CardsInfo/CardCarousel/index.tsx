import Card from "../Card";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store";

interface CardCarouselProps {
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const CardCarousel = ({ currentIndex, setCurrentIndex }: CardCarouselProps) => {
    const cards = useSelector((state: RootState) => state.cards.cards);
    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards.map((card, index) => (
                        <div className="w-full shrink-0" key={index}>
                            <Card card={card} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-2 gap-2">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full bg-[#01D167] ${index === currentIndex ? "" : "opacity-20"}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardCarousel;
