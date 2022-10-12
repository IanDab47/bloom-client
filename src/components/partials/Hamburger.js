import { useState } from "react" // import state
import { Link } from 'react-router-dom'

export default function Hamburger() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="flex items-end my-auto">
      <nav>
        <section className="flex lg:hidden">
          <div
            className="flex flex-col justify-end gap-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className={`block h-0.5 w-8 ${isNavOpen ? 'bg-bloom-sage' : 'bg-stone-50'}`}></span>
            <span className={`block h-0.5 w-8 ${isNavOpen ? 'bg-bloom-sage' : 'bg-stone-50'}`}></span>
            <span className={`block h-0.5 w-8 ${isNavOpen ? 'bg-bloom-sage' : 'bg-stone-50'}`}></span>
          </div>

          <div className={`relative ${isNavOpen ? "showMenuNav bg-bloom-gray border-[1px] border-bloom-olive rounded-md" : "hideMenuNav"}`}> {/* toggle class based on isNavOpen state */}
            <div
              className="CROSS-ICON absolute top-0 right-0 px-3 py-3"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="#fafaf9"
                stroke="#fafaf9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN font-bloom-sans font-light flex flex-col items-start">
              <li className="border-b w-full border-bloom-sage text-[1.3rem] font-normal mt-8 italic">
                <h1>COURSES</h1>
              </li>
              <li className="text-[1.25rem] text-md mt-1 p-0">
                <a href="/courses">Browse</a>
              </li>
              <li className="text-[1.25rem] text-md p-0">
                <a href="/courses/new">New Course</a>
              </li>
              <li className="border-b w-full border-bloom-sage text-[1.4rem] font-normal mt-5 italic">
                <h1>USER</h1>
              </li>
              <li className="text-[1.25rem] text-md mt-1 p-0">
                <a href="/users/0987203498752">Profile</a>
              </li>
              <li className="text-[1.25rem] text-md mt-[-.25rem] p-0">
                <a href="/courses/new">Logout</a>
              </li>
              <li className="border-t w-full border-bloom-sage text-[1.25rem] font-light mt-5 py-3 italic">
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
        transition: all 120ms ease-in;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        right: 0;
        width: 11rem;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;
        padding-left: 1.5rem;
        translate: .8rem;
      }
    `}</style>
    </div>
  );
}