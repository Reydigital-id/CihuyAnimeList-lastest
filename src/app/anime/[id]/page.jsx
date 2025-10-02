import { getAnimeResponse } from "@/libs/api-libs";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Header from "@/components/Dashboard/Header";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id }
  })



  return (
    <>
      <div className="bungkus">
        <h3 className="text-primary text-3xl text-bold">
          {anime.data.title} - {anime.data.year}
        </h3>
        {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>}
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
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="w-full rounded-lg shadow-lg object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div className="bungkusComment">
        <CommentBox anime_mal_id={id}/>
        {user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data.title}/>}
      </div>
      <div>
      <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
