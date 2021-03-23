import axios from 'axios';

//the prpes of this component to set up evry default links some we geting from the APIs!!
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID gouLv00u_0iOfOQElpL2NgZVzsxT0dNb9E_sHtC4sKQ'
    }
});