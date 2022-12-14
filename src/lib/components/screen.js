const Screen = ({ children }) => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="overflow-clip min-h-[823px] h-[823px] max-h-[823px] w-[411px] min-w-[411px] max-w-[411px] bg-white">
        {children}
      </div>
    </div>
  );
};

export default Screen;
