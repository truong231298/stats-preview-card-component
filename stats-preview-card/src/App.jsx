import imgDestop from "/images/image-header-desktop.jpg"
import imgMobile from "/images/image-header-mobile.jpg"

export default function App() {
  const infors = [
    { num: "10k+", content: "companies" },
    { num: "314", content: "templates" },
    { num: "12m+", content: "queries" }

  ]

  return (
    <main className="min-h-screen flex justify-center items-center bg-Verydarkblue text-center sm:text-justify">
      {/* card */}
      <section className="sm:max-w-2xl sm:h-80 flex flex-col-reverse mx-4 mt-8 sm:flex-row bg-Darkdesaturatedblue rounded-lg">
        <div className="flex flex-col sm:w-1/2 gap-4 p-8">
          <h1 className="text-xl text-White font-semibold">Get <span className="text-Softviolet">insights</span> that help your business grow.</h1>
          <p className="text-Slightlytransparentwhite">Discover the benefits of data analytics and make better decisions regarding revenue, customer
            experience, and overall efficiency.</p>

          <div className="flex sm:flex-row flex-col gap-4 sm:justify-between mt-4">
            {infors.map((infor) => (
              <span key={infor.num}>
                <h2 className="text-White font-semibold text-lg">{infor.num}</h2>
                <p className="text-Slightlytransparentwhite uppercase text-xs">{infor.content}</p>

              </span>
            ))}
          </div>

        </div>
        <div className="sm:w-1/2">
          <img src={imgDestop} alt="" className="h-full rounded-lg hidden sm:block" />
          <img src={imgMobile} alt="" className="w-full h-52 sm:hidden rounded-lg" />
        </div>

      </section>
    </main>
  )
}