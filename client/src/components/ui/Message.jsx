export function Message({ message }) {
  return (
    <p className="text-slate-200 py-2 px-3 text-sm rounded-sm mb-1" style={{backgroundColor:"rgba(255, 83, 165, 0.8)"}}>
      {message}
    </p>
  );
}
