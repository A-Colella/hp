export default class CharactersDataService {
    async getCharacterByHouse() {
        const url = "https://hp-api.onrender.com/api/characters/house/"+(house);
        try {
            const promise = await fetch(url, {method: "GET"});
            const response = await promise.json ();
            const status = await promise.status; 
            return [response, status];
        } catch (err) {
            return err
        }

    }


}