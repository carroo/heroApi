import React from "react";

interface Powerstats {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  }
  
  interface Biography {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  }
  
  interface Appearance {
    gender: string;
    race: string;
    height: [string, string];
    weight: [string, string];
    "eye-color": string;
    "hair-color": string;
  }
  
  interface Work {
    occupation: string;
    base: string;
  }
  
  interface Connections {
    "group-affiliation": string;
    relatives: string;
  }
  
  interface Image {
    url: string;
  }
  
  interface Character {
    id: string;
    name: string;
    powerstats: Powerstats;
    biography: Biography;
    appearance: Appearance;
    work: Work;
    connections: Connections;
    image: Image;
  }

interface ViewListProps {
    character: Character;
    onSelectedCharacter: (id: string) => void;
  }

export default function ViewList({ character, onSelectedCharacter }: ViewListProps) {
    return (
      <li
        className="border-b-2 border-black flex flex-wrap p-2"
        key={character.id}
        onClick={() => onSelectedCharacter(character.id)}
      >
        <img
          width={"100px"}
          className="max-h-24 rounded-lg w-1/5"
          src={character.image.url}
          alt={`${character.name} cover`}
        />
        <div className="w-4/5">
          <h3 className="mx-3 text-black font-extrabold text-3xl">
            {character.name}
          </h3>
          <div className="mx-3">
            <p className="text-base">{character.biography.publisher}</p>
          </div>
        </div>
      </li>
    );
  }