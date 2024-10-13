const InfiniteScroll = () => {
  return (
    <>
      <div className="flex overflow-hidden border-y-4 border-y-white space-x-2 bg-gradient-to-br from-sky-500 to-blue-700 text-white z-[50] absolute -bottom-8">
        <div className="flex space-x-16 animate-loop-scroll p-6 text-2xl custom-heading">
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
        </div>
        <div
          className="flex space-x-16 animate-loop-scroll p-6 text-2xl lilita custom-heading"
          aria-hidden="true"
        >
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
          <p>$Basedoggo</p>
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
