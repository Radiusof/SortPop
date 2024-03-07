export class CountService {
    /**
    * Counts the categories and appends the counts to the names of items and people.
    * @param {Array} data - The array of items representing categories, people, and animals.
    * @returns {Array} - An array of objects with counts appended to the names of items and people.
    */
    countCategories(data) {
        // Implement the counting logic for categories
        const counts = data.map(item => {
            const count = this.countChildren(item);
            if (item.people) {
                item.people = item.people.map(person => {
                const personCount = person.animals ? person.animals.length : 0;
                return { ...person, name: `${person.name} [${personCount}]` };
                });
            }
            return { ...item, name: `${item.name} [${count}]` };
        });
        // Return the counts for each category
        return counts;
    }
    
    /**
    * Counts the number of children (people or animals) for a given item.
    * @param {Object} item - The item representing a category, person, or animal.
    * @returns {number} - The count of children (people or animals) for the given item.
    */
    countChildren(item) {
        if (item.people) {
        return item.people.length;
        } else if (item.animals) {
        return item.animals.length;
        }
        return 0;
    }
}
