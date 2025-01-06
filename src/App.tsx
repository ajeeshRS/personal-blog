import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-[100vh]">
        <div className="w-full flex flex-col items-start py-16 space-y-3 md:px-56 px-5">
          <h3 className="font-bold font-poppins text-3xl text-neutral-850">
            Blogs by ajeesh
          </h3>
          <p className="text-sm text-neutral-500 font-inter md:w-1/2 ">
            Here, I share solutions to challenges I&apos;ve encountered during my
            software development journey.
          </p>
          <div className="w-full flex justify-center items-center py-20">
            <p className="text-lg font-semibold text-neutral-300 font-inter">
              Coming soon.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
