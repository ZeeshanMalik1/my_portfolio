function Card({ title, children }) {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/40 shadow-lg rounded-xl p-5 transition duration-300 hover:shadow-xl">
      <div className="font-semibold text-gray-900 dark:text-gray-100">{title}</div>
      <div className="mt-2 text-sm text-gray-700 dark:text-gray-300">{children}</div>
    </div>
  );
}
export default Card;
