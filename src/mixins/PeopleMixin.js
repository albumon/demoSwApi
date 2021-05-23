import axios from 'axios'
import { Util } from "../common/Util";

export default {
    data () {
        return {

        }
    },
    methods: {
        /**
         * Method for retrieve the people data from swapi
         * It collects all the data of the People, til there is no more pages.
         * @returns people list
         */
        async getPeopleList () {
            const list = []
            let url = 'https://swapi.dev/api/people/?format=json'
            do {
                await axios.get(url).then(response => {
                    if (Util.isWorkableObject(response)) {
                        // Get the next url
                        url = response.data.next
                        // Add the data to the list
                        list.push(...response.data.results)
                    }
                }).catch(error => {
                    // Finish load with the obtained results till the error
                    url = null
                    this.$toast.add({severity:'error', summary: 'Error', detail: error.message, life: 3000});
                })
            } while (Util.isWorkableObject(url))
            return list
        }
    }
}