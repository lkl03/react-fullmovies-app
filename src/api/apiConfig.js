const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7f254e9cf2f78a416e387cf879a3d3fc',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
