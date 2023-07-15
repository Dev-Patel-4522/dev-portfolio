function AppFooterCopyright() {
	return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        <p className="font-general-regular flex justify-center items-center text-center">
          	Made with ❤️ in India
        </p>
        &copy; {new Date().getFullYear()}
        <a
          href="/"
          target="__blank"
          className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
        >
          Dev Patel | Portfolio
        </a>
        {/* <a
				href="https://stoman.me"
				target="__blank"
				className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
			>
				Stoman
			</a> */}
      </div>
    </div>
  );
}

export default AppFooterCopyright;
