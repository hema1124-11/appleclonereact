import { FaPlay } from "react-icons/fa";
import ButtonTv from "./reusableComponents/ButtonTv";

const movieData = [
  {
    src: "./Movie_poster_2.jpg",
    mobile: "./gorge_small.jpg",
    alt: "Movie 2",
    genre: "Thriller",
    desc: "The World's most dangerous secret lies between them",
  },
  {
    src: "./Movie_poster_1.jpg",
    mobile: "./severence_small.jpg",
    alt: "Movie 1",
    genre: "Thriller",
    desc: "There's more to work than life.",
  },
  {
    src: "./Movie_poster_4.jpg",
    mobile: "./silo_small.jpg",
    alt: "Movie 4",
    genre: "Sci-Fi",
    desc: "The Truth will suffice.",
  },
  {
    src: "./Movie_poster_5.jpg",
    mobile: "./slow_small.jpg",
    alt: "Movie 5",
    genre: "Thriller",
    desc: "Old sins cast new shadows.",
  },
  {
    src: "./Movie_poster_6.jpg",
    mobile: "./instigator_small.jpg",
    alt: "Movie 6",
    genre: "Action",
    desc: "Worst.Heist.Ever",
  },
  {
    src: "./Movie_poster_3.jpg",
    mobile: "./fountain_small.jpg",
    alt: "Movie 3",
    genre: "Action",
    desc: "It's only a legend, until you discover it.",
  },
];

const Slide = () => {
  return (
    <section className="w-full bg-white">
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-16 sm:w-32 xl:w-52 bg-white/70 z-10" />
        <div className="absolute top-0 right-0 h-full w-16 sm:w-32 md:w-[120px] xl:w-52 bg-white/70 z-10" />

        <div className="overflow-x-auto no-scrollbar bg-white/60 backdrop-blur py-1 relative z-0">
          <div className="flex w-max gap-3 sm:gap-4 px-3">
            {movieData.map((movie, index) => (
              <div
                key={index}
                className="relative shrink-0
      w-[70vw] h-[90vw]
      sm:w-[400px] sm:h-[400px]
      md:w-[580px] md:h-[500px]
      lg:w-[800px] lg:h-[580px]
      xl:w-[1250px] xl:h-[660px]"
              >
                <img
                  src={movie.mobile || movie.src}
                  alt={movie.alt}
                  className="w-full h-full object-cover block sm:hidden"
                />

                <img
                  src={movie.src}
                  alt={movie.alt}
                  className="w-full h-full object-cover hidden sm:block"
                />

                <div className="absolute bottom-4 left-3 right-3 text-white">
                  <ButtonTv
                    buttonName="Stream now"
                    genreName={movie.genre}
                    desc={movie.desc}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-4 mb-6 h-4">
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 items-center">
            {movieData.map((movie, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full inline-block ${
                  index === 3 ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
            <div className="text-[10px] rounded-full bg-gray-300 p-2 text-gray-900 flex items-center justify-center shadow">
              <FaPlay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
