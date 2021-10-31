import Axios from 'axios';

const themeApi = 'admin/api/2021-01';

export function updateTheme(shop, accessToken){

    const axios = Axios.create({
        baseURL: `https://${shop}/${themeApi}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': accessToken
        }
    });
    getThemeId(axios);

}

async function getThemeId(axios){

    const { data } = await axios.get('/themes.json');
    console.log('themes found',data);
    const mainTheme = data.themes.find(theme => theme.role === 'main');
    if(!mainTheme){
        console.log('No main theme found');
        return;
    }
    console.log('The main theme is:', mainTheme);
    console.log('The main theme id is:', mainTheme.id);

}