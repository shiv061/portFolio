import Meta from './Meta';

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
