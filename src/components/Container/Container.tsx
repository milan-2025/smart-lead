const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="flex md:w-10/12 w-11/12">{children}</div>
      </div>
    </>
  );
};

export default Container;
