import { menuItems } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div key={item.title} className="flex flex-col gap-2">
          <span className="hidden lg:block text-gray-400 font-ligth my-4">
            {item.title}
          </span>
          {item.items.map((item) => (
            <Link
              className="flex text-gray-500 py-1 gap-4 items-end justify-center lg:justify-start"
              key={item.label}
              href={item.href}
            >
              <Image src={item.icon} width={20} height={20} alt={item.label} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
