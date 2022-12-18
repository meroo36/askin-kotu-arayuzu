export function getAbsoluteUrl() {
    if (process.env.NODE_ENV == 'development') {
        return 'http://localhost:3000'
    }
    else if (process.env.NODE_ENV == 'production') {
        return 'https://askin-kotu-arayuzu.vercel.app'
    }
}