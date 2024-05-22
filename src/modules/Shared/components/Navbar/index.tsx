import {
  RectangleStackIcon,
  UserIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useBrowserLocation } from "wouter/use-browser-location";

const MENU_ITEMS = [
  { icon: RectangleStackIcon, text: "Todo", location: "/" },
  { icon: CheckIcon, text: "Completed", location: "/completed" },
  { icon: UserIcon, text: "My Profile", location: "/profile/me" },
];

const Navbar = () => {
  const [location, setLocation] = useBrowserLocation();

  return (
    <div className="border-t py-1 grid grid-cols-3">
      {MENU_ITEMS.map((menuItem, index) => (
        <div
          key={index}
          className="flex justify-center"
        >
          <button
            className={classNames("btn btn-ghost flex flex-col items-center", {
              "text-primary": location === menuItem.location,
            })}
            onClick={() => setLocation(menuItem.location)}
          >
            {<menuItem.icon className="size-4" />}
            <span className="leading-none text-xs">{menuItem.text}</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
