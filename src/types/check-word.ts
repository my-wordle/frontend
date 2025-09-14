export interface WordValidatorSuccess {
    word: string;
    phonetic: string;
    phonetics: [
        {
            text: string;
            audio: string;
        },
        {
            text: string;
        }
    ];
    origin: string;
    meanings: [
        {
            partOfSpeech: string;
            definitions: [
                {
                    definition: string;
                    example: string;
                    synonyms: string[];
                    antonyms: string[];
                }
            ];
        },
        {
            partOfSpeech: string;
            definitions: [
                {
                    definition: string;
                    example: string;
                    synonyms: string[];
                    antonyms: string[];
                }
            ];
        },
        {
            partOfSpeech: string;
            definitions: [
                {
                    definition: string;
                    example: string;
                    synonyms: string[];
                    antonyms: string[];
                }
            ];
        }
    ];
}

export interface WordValidatorError {
    title: string;
    message: string;
    resolution: string;
}

export type WordValidatorResponse = WordValidatorSuccess[] | WordValidatorError;
