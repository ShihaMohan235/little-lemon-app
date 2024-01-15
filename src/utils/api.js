import _ from 'lodash';

function generateRandomTimes() {
    const availableTimes = [
        '17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM', '22:00 PM'
    ];

    const numberOfRandomTimes = Math.floor(Math.random() * availableTimes.length) + 1;

    const randomTimes = Array.from({ length: numberOfRandomTimes }, () => {
        const randomIndex = Math.floor(Math.random() * availableTimes.length);
        return availableTimes[randomIndex];
    });

    return _.uniq(randomTimes);
}

const fetchAPI = async (date) => {
    let result = await generateRandomTimes();
    console.log(result, 'result')
    return result.sort();
};

// export const fetchAPI = async (date) => {
//     try {
//         const response = await fetch(/* Your API endpoint with date parameter */);
        
//         // Check if the response is successful
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }

//         // Parse the response and return the data
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         // Handle any errors that occurred during the fetch operation
//         console.error('Error in fetchAPI:', error);
//         throw error; // Optional: rethrow the error for higher-level error handling
//     }
// };

const submitAPI = formData => true;

export {
    fetchAPI,
    submitAPI
};