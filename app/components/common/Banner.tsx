type Props = {};

const Banner = (props: Props) => {
  return (
    <section className="flex flex-col items-center justify-center bg-secondary  p-8 bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748132743/agro-ally/TfVsdEorI3M6CtwPPcnMUstJ5Q_qixlzn.avif')] bg-center bg-cover min-h-[30vh] flex items-center justify-between">
      <div className="col-1">
        <div className="stack-cards"></div>
        <p>
          100K+ Client With <br /> Positive Reviews
        </p>
      </div>
      <div className="col-2">hello</div>
    </section>
  );
};

export default Banner;
