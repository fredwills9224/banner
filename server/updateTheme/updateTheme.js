import Axios from 'axios';
import fs from 'fs';
import path from 'path';

const themeApi = 'admin/api/2021-01';

export async function updateTheme(shop, accessToken){

    const axios = Axios.create({
        baseURL: `https://${shop}/${themeApi}`,
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': accessToken
        }
    });
    const mainThemeId = await getThemeId(axios);
    if(!mainThemeId){
        return;
    }
    getAssetThemeLiquid(mainThemeId, axios);

}

async function getAssetThemeLiquid(id, axios){

    const { data } = await axios.get(`/themes/${id}/assets.json?asset[key]=layout/theme.liquid`);
    console.log('Theme liquid file');
    if(!data.asset.value){
        return;
    }
    const snippet = fs.readFileSync(path.resolve(__dirname, '../../liquid/theme.liquid'));
    let newPage = data.asset.value;
    if(newPage.includes(snippet)){
        console.log('Page already has the snippet installed');
        return;
    }
    newPage = data.asset.value.replace(
        `{% section 'header' %}`,
        `{% section 'header' %}\n${snippet}\n`
    );
    console.log('New Page', newPage);
    return newPage;

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
    return mainTheme.id;

}