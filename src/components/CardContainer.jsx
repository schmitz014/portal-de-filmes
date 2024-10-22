export default function CardContainer({ title, children }) {
  return (
    <>
        <h1>{ title }</h1>
        <div className="flex">
            { children }
        </div>
    </>
  )
}