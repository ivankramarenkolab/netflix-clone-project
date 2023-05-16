import {Movie} from "@/typings";
import Image from "next/image";

interface Props {
    //When using firebase
    //movie: Movie | DocumentData
    movie: Movie
}

const Thumbnail = ({movie}: Props) => {
    return (
        <div className='h-[170px] cursor-pointer md:hover:scale-105 transition duration-200 ease-out'>
            <div className='relative  min-w-[180px] md:h-36 md:min-w-[260px] '>
                <Image
                    src={`https://image.tmdb.org/t/p/w500${
                        movie.backdrop_path || movie.poster_path
                    }`}
                    className="rounded-sm object-cover md:rounded"
                    layout="fill"
                    alt=''
                />
            </div>
            <h2 className='pt-1 text-white text-center'>{movie.title || movie.name}</h2>
        </div>
);
};

export default Thumbnail;