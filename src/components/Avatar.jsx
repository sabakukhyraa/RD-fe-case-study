export default function Avatar({source, className, isOnline}) {
  return (
    <div className="relative">
      <img className={`rounded-full w-11 h-11 aspect-square object-cover ${className}`} src={source} alt="avatar" />
      {isOnline && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-active-green"></div>}
    </div>
  )
}
