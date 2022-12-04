import axios from "axios";

const endpoint = "https://api.github.com/gists/public";

export const getGistRequest = async (params) => {

    return await axios.get(endpoint, {
        params: {
            page: params.page,
            per_page:17
        }
    })
}
