import '../App.css';

function BooksCard({ description, scriptureName, author, imageSrc }) {
    return (
      <>
        <div className="m-1">
            <div className="bg-gray-100 p-6 rounded-lg books-card">
                <img
                className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6 books-card-image"
                src={imageSrc}
                alt={`Image for ${scriptureName}`}
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                {author}
                </h3>
                <h2 className="text-xl text-gray-900 font-medium title-font mb-4 mt-2">
                {scriptureName}
                </h2>
                <p className="leading-relaxed text-base">{description}</p>
            </div>
        </div>
      </>
    );
  }
  
export default BooksCard;
  