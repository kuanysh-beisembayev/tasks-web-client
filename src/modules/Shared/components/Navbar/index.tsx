import { RectangleStackIcon, UserIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useBrowserLocation } from "wouter/use-browser-location";

const MENU_ITEMS = [
  { icon: RectangleStackIcon, text: "Tasks", location: "/" },
  { icon: UserIcon, text: "My Profile", location: "/profile/me" },
];

const Navbar = () => {
  const [location, setLocation] = useBrowserLocation();

  return (
    <div className="border-t py-1 flex justify-around">
      {MENU_ITEMS.map((menuItem, index) => (
        <button
          key={index}
          className={classNames("btn btn-ghost flex flex-col items-center", {
            "text-primary": location === menuItem.location,
          })}
          onClick={() => setLocation(menuItem.location)}
        >
          {<menuItem.icon className="size-4" />}
          <span className="leading-none text-xs">{menuItem.text}</span>
        </button>
      ))}
    </div>
  );
};

export default Navbar;
