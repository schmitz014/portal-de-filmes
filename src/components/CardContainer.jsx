export default function CardContainer({ title, children }) {
  return (
    <>
        <h1 className="font-evers text-7xl text-center p-5">{ title }</h1>
        <div className="m-1 gap-5 flex flex-wrap justify-center">
            { children }
        </div>
    </>
  )
}