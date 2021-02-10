import AppCell from "./app-cell"

export default function AppCollection(props) {
  return (
    <div id="products" className="max-w-screen-lg xl:max-w-screen-xl mx-auto pt-5">
      <div className="my-8 sm:my-14 px-4 sm:px-8">
        <h2 className="sm:text-center lg:text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
        </h2>
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {props.items.map(app =>
          <AppCell {...app} key={app.title} />
        )}
      </div>
    </div>
  )
}
