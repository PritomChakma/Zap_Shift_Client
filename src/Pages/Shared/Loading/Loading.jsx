const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-5">

        <div className="flex gap-2">
          <span className="w-4 h-4 rounded-full bg-lime-500 animate-bounce"></span>
          <span
            className="w-4 h-4 rounded-full bg-lime-500 animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="w-4 h-4 rounded-full bg-lime-500 animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>

        <h2 className="text-xl font-semibold text-gray-700 tracking-wide animate-pulse">
          Loading...
        </h2>
      </div>
    </div>
  );
};

export default Loading;