// The function is to find the character that has the highest number of occurrences within the word
function challenge(word) {
    // Create a hashmap to record the character and its occurrence number in this word, and find the highest number of occurrences within the word
    const characterMap = new Map();
    word = word.toLowerCase();
    let maxOccurrence = 1;
    for (let i = 0; i < word.length; i++) {
        if (characterMap.has(word[i])) {
            let count = characterMap.get(word[i]);
            count = count + 1;
            characterMap.set(word[i], count);
            if (count > maxOccurrence) {
                maxOccurrence = count;
            }
        } else {
            characterMap.set(word[i], 1);
        }
    }

    // Find the character that has the highest number of occurrences within the word
    let maxOccurrenceCharacter = "";
    for (const [key, value] of characterMap) {
        if (value === maxOccurrence) {
            maxOccurrenceCharacter = key;
            break;
        }
    }
    return maxOccurrenceCharacter;
}

// The function is to test the challenge function using certain word
function testScenario() {
    const word = "Character";
    const maxOccurrenceCharacter = challenge(word);
    console.log(`The character that has the highest number of occurrences within the word "${word}" is ${maxOccurrenceCharacter}`);
}

testScenario();
