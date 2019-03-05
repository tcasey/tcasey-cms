import axios from "axios";

exports.reviews = () => {
  const url =
    "https://itunes.apple.com/us/app/vivint-solar/id1289441541?mt=8&isWebExpV2=true&dataOnly=true";
  return axios(url).then(result => {
    const data = result.data.pageData.reviews.map(reviews => {
      return Object.assign(
        {},
        {
          body: reviews.body,
          date: reviews.date,
          name: reviews.name,
          rating: reviews.rating,
          title: reviews.title
        }
      );
    });
    return data;
  });
};

exports.handler = (event, context, callback) => {
  exports.reviews().then(result => {
    callback(null, {
      statusCode: 200,
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(result)
    });
  });
};
