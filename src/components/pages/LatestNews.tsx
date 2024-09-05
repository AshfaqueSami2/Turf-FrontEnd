import React from "react";

const LatestNews: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      title: "A Great and Fun Activity for You and Your Entire Family",
      category: "Badminton",
      date: "Mar 16, 2022",
      comments: "0 Comments",
      image:
        "https://i.ibb.co/R2L90mB/240-F-315111524-Ark-Lvl1vbs-TNNGPQa-Kag-B1p-Td-Tv-Xtf-St.jpg",
    },
    {
      id: 2,
      title: "Sharpen Your Skills with Professional Trainers at Our Club",
      category: "Badminton",
      date: "Mar 15, 2022",
      comments: "0 Comments",
      image:
        "https://i.ibb.co/4p2PLmK/240-F-437577636-1r9-Jli-EDE2bm5-UON2t-BCqz-FBNru-Gws3o.jpg",
    },
    {
      id: 3,
      title: "Sports Make Us a Lot Stronger and Healthier Than We Think",
      category: "Badminton",
      date: "Mar 14, 2022",
      comments: "0 Comments",
      image:
        "https://i.ibb.co/5k7MDHQ/360-F-96814823-4-YZrsofbv-FRu-X7-Uve3-VB46a-Kln2-BJOj-D.webp",
    },
  ];

  return (
    <div className="bg-white py-16 px-6 lg:px-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
          From the Blog
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
          The Latest News
        </h2>
      </div>

      {/* News Articles Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {newsArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-56 object-cover"
              />
            </div>
            <div className="p-5">
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                {article.category}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500">
                {article.date} &nbsp; • &nbsp; {article.comments}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
