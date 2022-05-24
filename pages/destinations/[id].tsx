import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { DetailType } from "../../types";

interface Props {
  country: string;
}

const DetailPage = ({ country }: Props) => {
  const [detail, setDetail] = useState<DetailType>();
  useEffect(() => {
    (async () => {
      const result = await fetch(`/api/travel-detail?country=${country}`).then(
        (res) => res.json()
      );
      setDetail(result);
    })();
  }, []);

  return (
    <div id="container" style={{ width: "80vw", margin: "20px auto" }}>
      <h1 id="country" className="lead">
        <b>Country</b>: {country}
      </h1>
      <div id="attractions" className="lead">
        <b>Attractions</b>: {detail?.attractions.join(", ")}
      </div>
      <div id="expense" className="lead">
        <b>Expense Level</b>: {detail?.expense}
      </div>
      <div id="description" className="lead">
        <b>Description</b>: {detail?.description}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      country: context.query.id,
    },
  };
};

export default DetailPage;
