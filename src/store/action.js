export const gistRequest = (params) => ({
    type: 'API_REQUEST',
    payload: {
        page: params.page,
    }
})
