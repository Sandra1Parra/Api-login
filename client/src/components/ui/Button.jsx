export function Button({ onClick, children }) {
  return (
    <button
      className="px-4 py-1 rounded-md my-2 disabled:bg-indigo-300" style={{backgroundColor:"rgba(255, 83, 165, 0.8)",border:"2px solid rgba(0, 0, 0, 1)"}}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
