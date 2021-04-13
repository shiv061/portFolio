import Head from 'next/head';
import LeftColumn from '../components/LeftColumn';
import RightColumn from '../components/RightColumn';
import { useAppContext } from '../context';

export default function Home() {
  const { open } = useAppContext();
  return (
    <div>
      <Head>
        <title>Shivansh | Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-3 min-h-screen">
        <div className="col-span-1 max-h-screen bg-primary">
          <LeftColumn />
        </div>
        <div className="col-span-2 bg-secondary">
          <RightColumn />
        </div>
      </div>
    </div>
  );
}
