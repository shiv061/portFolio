const Main = () => {
  return (
    <div className="h-full px-2 lg:px-4">
      {/* Main Head */}
      <div className="py-6">
        <h1 className="text-6xl font-semibold text-primary">Shivansh Singh</h1>
        <p className="font-light text-lg text-primary pl-2">Front End Engineer</p>
      </div>
      <div className="h-[1px] rounded-full bg-extra-200" />
      {/* Work Exp */}
      <div className="py-6">
        <div>
          <h1 className="tracking-widest text-primary font-semibold text-lg">WORK EXPERIENCE</h1>
        </div>
        <div className="grid grid-cols-4 py-2 px-4">
          <div className="col-span-1">
            <h1 className="font-medium text-lg text-primary text-right">WorkOnGrid</h1>
            <p className="font-light text-primary text-right">2020-Present</p>
          </div>
          <div className="flex flex-col justify-center items-center col-span-1">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-0.5 bg-extra-100 h-full" />
          </div>
          <div className="col-span-2">
            <div>
              <h1 className="text-primary font-semibold text-lg">Frontend and Mobile Developer</h1>
            </div>
            <div>
              <ul>
                <li className="text-primary font-extralight">Zapier Integration</li>
                <li className="text-primary font-extralight">Reports Builder</li>
                <li className="text-primary font-extralight">Dashboard Setup</li>
                <li className="text-primary font-extralight">Mobile - App Implementation from scratch</li>
                <li className="text-primary font-extralight">Mobile - Dashboards Implementation </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] rounded-full bg-extra-200" />
      <div className="py-6">
        <div>
          <h1 className="tracking-widest text-primary font-semibold text-lg">SKILLS</h1>
        </div>
        <div className="grid grid-cols-2">
          <div>
            <h1>Professional</h1>
          </div>
          <div>
            <h1>Personal</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
