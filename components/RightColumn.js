import { useRef } from 'react';
import BounceBall from './BounceBall';
import Main from './Main';

const RightColumn = ({scroll, setScroll}) => {
  const divRef = useRef(null);
  return (
    <>
      <Main divRef={divRef} scroll={scroll} setScroll={setScroll} />
      {scroll > 500 && <BounceBall divRef={divRef} />}
    </>
  );
};

export default RightColumn;
