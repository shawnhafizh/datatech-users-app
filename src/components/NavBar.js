import React from "react";

function NavBar() {
  return (
    <nav class="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
        <div class="flex w-full flex-wrap items-center justify-between px-4 py-2">
          <div class="ms-2">
            <span class="text-2xl font-medium text-white dark:text-white">DataTech</span>
          </div>
        </div>
      </nav>
  );
}

export default NavBar;