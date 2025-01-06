function Footer() {
  return (
    <footer
      className={`bg-[#FCFCFC] w-full h-fit py-2 text-neutral-500 border-t border-t-gray-100 shadow-md flex flex-col justify-center items-center`}
    >
      <p className="font-light">
        Designed and developed by
        <a
          className="hover:underline px-1"
          href={"https://www.ajeeshrs.online"}
        >
          <span className="underline">ajeesh</span>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
