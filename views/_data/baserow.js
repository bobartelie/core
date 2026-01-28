const baserow_token = "yGfiMmcSdFgOvD9TJjbEueSiMEkHFegC"

const get = async (url) => {
    return await fetch(url,{
        headers: {
            "Authorization": `Token ${baserow_token}`,
        }
    }).then(res => res.json())
}

export const courses = await get(`https://api.baserow.io/api/database/rows/table/714529/?user_field_names=true&size=4`)
export const testimonials = await get(`https://api.baserow.io/api/database/rows/table/759955/?user_field_names=true&size=3`)
export const gallery = await get(`https://api.baserow.io/api/database/rows/table/759992/?user_field_names=true&size=3`)
export const faq = await get(`https://api.baserow.io/api/database/rows/table/781420/?user_field_names=true`)
