export class FilterService {
    /**
    * Filters the provided data based on the given pattern.
    * @param {Array} data - The data to be filtered, containing fake town name, people, and animals.
    * @param {string} pattern - The pattern to filter the animal names.
    * @returns {Array} - The filtered data containing  people and animals matching the pattern.
    */
    filterByPattern(data, pattern) {

        const filteredData = [];

        const filterNested = (item) => {
            const filteredPeople = item.people.map((person) => {
                const filteredAnimals = person.animals.filter((animal) => {
                    return animal.name.toLowerCase().includes(pattern.toLowerCase());
                });
                return filteredAnimals.length > 0 ? { ...person, animals: filteredAnimals } : null;
            }).filter(Boolean);

            if (filteredPeople.length > 0) {
                filteredData.push({ ...item, people: filteredPeople });
            }
        };

        data.forEach((town) => {
            filterNested(town);
        });

        return filteredData;
    }
}