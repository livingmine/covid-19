import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="bg-gray-200 text-gray-900 w-full">
      <Header />

      {/* <main className="md:justify-center mx-auto py-8 w-full">
        
      </main> */}

      <main className="w-full px-4">

      </main>
      {children}

      <footer className="bg-blue-700">
        <nav className="w-full flex justify-between mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://bryant.io"
            >
              Taylor Bryant
            </a>
          </p>

          <p>
            <a
              className="font-bold no-underline text-white"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
