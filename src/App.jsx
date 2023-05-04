import React from "react";
import Switcher from "./components/Switcher/Switcher";

const App = () => {
  return (
    <div className="bg-[white] dark:bg-[#111827] transition dark:transition justify-center flex h-[100vh] pt-[20px]">
      <div className="w-full md:w-1/2 lg:w-2/6">
        <div className="w-[15%] m-auto">
          <Switcher />
        </div>
        <div className="bg-[white] dark:bg-gray-800 m-4 rounded-lg shadow-2xl">
          <img
            src="https://www.thoughtco.com/thmb/g8h6NnWWWVkm-KXNBgMx-0Edd2U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages_482194715-56a1329e5f9b58b7d0bcf666.jpg"
            alt=""
            className="h-[360px]"
          />
          <div className="px-4 pt-2">
            <h1 className="font-bold mt-2 text-2xl text-gray-800 dark:text-gray-300">
              UX Better Solution
            </h1>
            <h3 className="text-gray-500 dark:text-gray-300">
              Dark & Light mode with React & Tailwind 🤙
            </h3>
            <p className="text-gray-400 dark:text-gray-400 my-4">
              Development of dark and light theme mode using React and Tailwind.
              Also saving the current theme in LocalStorage. The current theme
              mode is pulled when the page is refreshed. Let's try!
            </p>
          </div>
          <div className="px-4 pb-2">
            <a
              href="https://www.linkedin.com/in/rustam-samandarzoda-8a3789270/"
              target="_blank"
              className="flex items-center"
            >
              <img
                src="https://i1.sndcdn.com/avatars-000617230884-00hg7q-t500x500.jpg"
                width="32"
                alt="avatar"
                className="rounded-full"
              />
              <div className="ml-2">
                <p className="text-gray-500 dark:text-gray-300 text-sm">
                  @Rustam Samandarzoda
                </p>
              </div>
            </a>
          </div>
          <div className="p-4">
            <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">
              #react
            </span>
            <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">
              #tailwind
            </span>
            <span className="inline-block bg-gray-300 dark:bg-gray-500 rounded-full px-3 py-1 text-xs font-semibold text-gray-500 dark:text-gray-300 mr-2 mb-2">
              #darkmode
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
