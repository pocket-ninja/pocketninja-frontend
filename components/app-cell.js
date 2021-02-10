export default function AppCell(props) {
  return (
    <div className="p-4 md:mb-4 flex flex-col justify-center items-center max-w-md">
      <div className="w-full shadow-md bg-cover bg-center">
        <img className="rounded-t" src={props.thumbnailUrl} />
      </div>

      <div className="rounded-b w-full bg-white shadow-md overflow-hidden p-5">
        <div className="pt-2 title-post font-medium">{props.title}</div>
        <div className="pt-2">
          <div className="line-clamp-3">
            {props.description}
          </div>
          <a href={props.storeUrl} className="mt-4 block">
            <img src="/appstore_badge.svg" />
          </a>
        </div>
      </div>
    </div>
  )
}
