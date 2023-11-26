"use client";
import { useEffect, useState } from "react";
import ViewList from "./Component/ViewList";
import ViewDetail from "./Component/ViewDetail";
import Footer from "./Component/Footer";
import LoadingChar from "./Component/LoadingChar";
import LoadingDetail from "./Component/LoadingDetail";
export default function App() {
  const [query, setQuery] = useState("spider");
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (query.length > 0) {
      const fetchData = async () => {
        const url = `https://www.superheroapi.com/api.php/3161278757529559/search/${query}`;

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          if (result.response == "success") {
            setCharacters(result.results);
            setSelectedCharacter(null);
            setIsLoading(false);
          } else {
            setCharacters([]);
            setSelectedCharacter(null);
            setIsLoading(true);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          console.log(error);
        }
      };
      fetchData();
    }
  }, [query]);

  function handleselectedCharacter(id: any) {
    const newcharacter = characters.filter((character) => character.id === id);
    setSelectedCharacter(newcharacter[0]);
  }

  return (
    <>
      <header className="bg-secondary w-full p-4 mb-5">
        <div className="container flex justify-center">
          <h2 className="font-extrabold font-sans text-4xl text-white">
            SuperHero Api
          </h2>
        </div>
      </header>
      <nav className="container">
        <div className="mt-3 flex flex-col justify-center">
          <input
            className="w-2/5 block mx-auto h-5 p-4 pb-5 rounded-2xl text-2xl mb-2"
            type="text"
            placeholder="Search Character ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <p className="mx-auto text-white text-base">
            Found <strong>{characters.length}</strong> results
          </p>
        </div>
      </nav>

      <main className="pt-3 mb-24">
        <div className="container">
          <div className="flex flex-wrap mx-32">
            <div className="w-1/2 px-3 overflow-y-auto h-screen">
              <div className="border-black border-2 bg-white rounded-lg flex flex-wrap">
                {isLoading ? (
                  <ul className="w-full">
                    <LoadingChar />
                    <LoadingChar />
                    <LoadingChar />
                  </ul>
                ) : (
                  <ul className="w-full">
                    {characters?.map((character) => (
                      <ViewList
                        character={character}
                        onSelectedCharacter={handleselectedCharacter}
                      />
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="w-1/2 px-3 overflow-y-auto h-screen">
              {selectedCharacter ? (
                <ViewDetail selectedCharacter={selectedCharacter} />
              ) : (
                <LoadingDetail />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  );
}

