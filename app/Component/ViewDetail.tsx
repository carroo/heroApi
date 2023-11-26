import React from "react";
import ChartComponent from "../chart/page";

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

interface ViewDetailProps {
  selectedCharacter: Character;
}

export default function ViewDetail({ selectedCharacter }: ViewDetailProps) {
  return (
    <div className="border-black border-2 bg-white rounded-lg flex flex-wrap ">
      <div className="flex flex-wrap border-b-2 border-black">
        <div className="w-full flex flex-col justify-center mt-3">
          <h2 className="font-base text-xl mx-auto">Information</h2>
          <h2 className="font-extrabold text-2xl mx-auto">
            {selectedCharacter.name}
          </h2>
        </div>
        <div className="w-full mx-4 border border-black mt-3"></div>
        <div className="w-1/2 p-4">
          <img
            className="rounded-lg"
            src={selectedCharacter.image.url}
            alt={`${selectedCharacter.name} cover`}
          />
        </div>
        <div className="w-1/2 p-4">
          <ChartComponent param={selectedCharacter.powerstats} />
        </div>

        <div className="w-full mx-4 border border-black mt-3"></div>
        <div className="w-full flex flex-col justify-center mb-4 mt-2">
          <h2 className="font-base text-xl mx-auto">Biograpy</h2>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Full Name
                  </th>
                  <td>{selectedCharacter.biography["full-name"]}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Alter Egos
                  </th>
                  <td>{selectedCharacter.biography["alter-egos"]}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Aliases
                  </th>
                  <td>
                    {selectedCharacter.biography.aliases?.map(
                      (alias, index) => (
                        <span
                          key={index}
                          className="bg-red-300 mr-2 rounded-md px-2"
                        >
                          #{alias}
                        </span>
                      )
                    )}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Place of Birth
                  </th>
                  <td>{selectedCharacter.biography["place-of-birth"]}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    First Appearance
                  </th>
                  <td>{selectedCharacter.biography["first-appearance"]}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Publisher
                  </th>
                  <td>{selectedCharacter.biography["publisher"]}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Alignment
                  </th>
                  <td>{selectedCharacter.biography["alignment"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full mx-4 border border-black mt-3"></div>
        <div className="w-full flex flex-col justify-center mb-4 mt-2">
          <h2 className="font-base text-xl mx-auto">Appearance</h2>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Gender
                  </th>
                  <td>{selectedCharacter.appearance.gender}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Race
                  </th>
                  <td>{selectedCharacter.appearance.race}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Height
                  </th>
                  <td>
                    {selectedCharacter.appearance.height.map((h, index) => (
                      <span key={index} className="mr-2">
                        {h}
                      </span>
                    ))}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Weight
                  </th>
                  <td>
                    {selectedCharacter.appearance.weight.map((w, index) => (
                      <span key={index} className="mr-2">
                        {w}
                      </span>
                    ))}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Eye Color
                  </th>
                  <td>{selectedCharacter.appearance["eye-color"]}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Hair Color
                  </th>
                  <td>{selectedCharacter.appearance["hair-color"]}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full mx-4 border border-black mt-3"></div>
        <div className="w-full flex flex-col justify-center mb-4 mt-2">
          <h2 className="font-base text-xl mx-auto">Work</h2>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Occupation
                  </th>
                  <td>{selectedCharacter.work.occupation}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Base
                  </th>
                  <td>{selectedCharacter.work.base}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full mx-4 border border-black mt-3"></div>
        <div className="w-full flex flex-col justify-center mb-4 mt-2">
          <h2 className="font-base text-xl mx-auto">Connections</h2>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Group Affiliation
                  </th>
                  <td>{selectedCharacter.connections["group-affiliation"]}</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Relatives
                  </th>
                  <td>{selectedCharacter.connections.relatives}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
