const LeftColumn = () => {
  return (
    <div className="grid grid-rows-4 h-full">
      <div className="w-full grid place-items-center">
        <div className="w-28 h-28 bg-extra-100 rounded-full grid place-items-center">
          <h1 className="text-6xl text-primary">SS</h1>
        </div>
      </div>
      <div>
        <div className="py-1">
          <h1 className="text-secondary text-2xl px-6 tracking-widest">INFO</h1>
        </div>
        <div className="w-full ml-6 h-[2px] rounded-full bg-extra-200" />
        <div className="ml-10">
          <div className="py-2">
            <h1 className="text-secondary">Name</h1>
            <h1 className="text-light text-extra-200">Shivansh Singh</h1>
          </div>
          <div className="py-2">
            <h1 className="text-secondary">E-Mail</h1>
            <h1 className="text-light text-extra-200">shivansh7503@gmail.com</h1>
          </div>
        </div>
      </div>
      <div className="row-span-2">
        <div className="py-1">
          <h1 className="text-secondary text-2xl px-6 tracking-widest">SOCIAL</h1>
        </div>
        <div className="w-full ml-6 h-[2px] rounded-full bg-extra-200" />
        <div className="ml-10">
          <div className="py-2">
            <h1 className="text-secondary">Github</h1>
            <h1 className="text-light text-extra-200 underline pointer">Link</h1>
          </div>
          <div className="py-2">
            <h1 className="text-secondary">LinkedIn</h1>
            <h1 className="text-light text-extra-200 underline pointer">Link</h1>
          </div>
          <div className="py-2">
            <h1 className="text-secondary">Twitter</h1>
            <h1 className="text-light text-extra-200 underline pointer">Link</h1>
          </div>
          <div className="py-2">
            <h1 className="text-secondary">Instagram</h1>
            <h1 className="text-light text-extra-200 underline pointer">Link</h1>
          </div>
          <div className="py-2">
            <h1 className="text-secondary">Mail</h1>
            <h1 className="text-light text-extra-200 underline pointer">Link</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
