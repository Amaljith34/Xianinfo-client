import { Link } from 'react-router-dom';

export function VideoCard({ video, onButtonClick }) {
  return (
    <div className="group relative block overflow-hidden rounded-lg border border-gray-200">
      <Link to={`/video/${video.id}`} className="relative aspect-video w-full overflow-hidden">
        <img
          src={video.imageSrc || "/placeholder.svg"}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-2xl font-bold text-white">
          {video.title}
        </h3>
      </Link>
      <div className="flex items-center gap-2 p-4">
        <img
          src={'/src/assets/avat.png'}
          alt="Creator Avatar"
          className="h-8 w-8 rounded-full"
        />
        <span className="text-sm text-gray-700">{video.createdBy}</span>
      </div>
      <div className="p-4">
        <button
          onClick={() => onButtonClick(video)}
          className="w-full rounded bg-primary px-4 py-2 text-white hover:bg-primary-dark transition duration-200"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
