function JokeCard({ title, desc }) {
  return (
    <div className="bg-white rounded-md shadow-md text-center p-8">
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="mt-5">{desc}</p>
    </div>
  );
}

export default JokeCard;
