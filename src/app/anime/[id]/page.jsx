import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="bungkus">
        <h3 className="text-primary text-3xl text-bold">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="bungkus flex gap-2 text-primary overflow-x-auto">
        <div className="meluas w-36 flex flex-col justify-center items-center rounded border border-primary">
          <h3>PERINGKAT</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="meluas w-36 flex flex-col justify-center items-center rounded border border-primary">
          <h3>SCORE</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="meluas w-36 flex flex-col justify-center items-center rounded border border-primary">
          <h3>EPISODE</h3>
          <p>{anime.data.episodes}</p>
        </div>
        <div className="meluas w-36 flex flex-col justify-center items-center rounded border border-primary">
          <h3>ANGGOTA</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="meluas w-36 flex flex-col justify-center items-center rounded border border-primary">
          <h3>STUDIO</h3>
          <p className="text-center">
            {anime.data.studios.map((studio) => studio.name).join(", ")}
          </p>
        </div>
      </div>
      <div className="bungkus flex sm:flex-nowrap flex-wrap gap-2 text-primary ">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.title}
          width={250}
          height={250}
          className="w-full rounded-lg shadow-lg object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
    </>
  );
};

export default Page;
