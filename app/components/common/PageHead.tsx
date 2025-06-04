type pageProps = {
  pageDesc: string;
  pageName: string;
  pageBg: string;
};

const PageHead = ({ pageDesc, pageName, pageBg }: pageProps) => {
  return (
    <section className={`pageHead ${pageBg} bg-center bg-cover`}>
      <div className="cover bg-gradient-to-r from-[#0e2207ce] to-[#0000008f]  min-h-[60vh] p-8 text-white flex flex-col justify-center ${pageBg">
        <h2 className="text-[2.5rem] md:text-[3.2rem] capitalize font-[700]">
          {pageName}
        </h2>
        <p className="font-[300] text-[1.1rem]">{pageDesc}</p>
      </div>
    </section>
  );
};

export default PageHead;
