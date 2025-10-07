function Stat({ title, value }) {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/40 rounded-xl p-4 shadow-lg transition duration-300 hover:shadow-xl">
      <div className="text-sm text-gray-600 dark:text-gray-400">{title}</div>
      <div className="mt-1 font-bold text-gray-900 dark:text-gray-100">{value}</div>
    </div>
  );
}

export default Stat;
