import { useState, useEffect } from "react";

const withStudioGhibliData = (WrappedComponent, dataURL) => {
  return (props) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
      let response = await fetch(dataURL);
      let list = await response.json();
      setData(list);
    };

    useEffect(() => {
      fetchData();
    }, []);

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withStudioGhibliData;
