import { NavLink, useLocation } from "react-router-dom";
import HomeIcon from "../Icons/HomeIcon";
import CardIcon from "../Icons/CardIcon";
import PaymentsIcon from "../Icons/PaymentsIcon";
import CreditIcon from "../Icons/CreditIcon";
import SettingsIcon from "../Icons/SettingsIcon";
import AspireLogo from "../Icons/AspireLogo";

const SidebarIcon = ({ children, selected }: { children: React.ReactNode, selected: boolean }) => (
    <span className={`inline-flex items-center justify-center w-6 h-6 mr-2 ${selected ? "text-[#01D167]" : "text-white"}`}>
        {children}
    </span>
);

const Sidebar = () => {
    const { pathname } = useLocation();

    const links = [
        { label: "Home", path: "/home", icon: HomeIcon },
        { label: "Cards", path: "/cards", icon: CardIcon },
        { label: "Payments", path: "/payments", icon: PaymentsIcon },
        { label: "Credit", path: "/credit", icon: CreditIcon },
        { label: "Settings", path: "/settings", icon: SettingsIcon },
    ];

    return (
        <div className="w-1/4 bg-[#0C365A] text-white p-10 h-screen">
            <h2 className="text-[#01D167] mb-5">
                <AspireLogo className="w-32"/>
            </h2>
            <p className="text-sm mb-15 opacity-30">
                Trusted way of banking for 3,000+ SMEs and startups in Singapore
            </p>
            <nav className="space-y-10">
                {links.map(({ label, path, icon: Icon }) => {
                    const selected = pathname === path;
                    return (
                        <NavLink
                            to={path}
                            key={label}
                            className={`flex items-center ${selected ? "text-[#01D167]" : "text-white"
                                } transition-colors`}
                        >
                            <SidebarIcon selected={selected}>
                                <Icon className="w-5 h-5 fill-current" />
                            </SidebarIcon>
                            {label}
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    )
};

export default Sidebar;