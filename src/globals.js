export default {
    app: {
        title: 'Games Timeline',
        basename: '/games-timeline/'
    },
    pages: {
        about: {
            title: 'About',
            path: '/about'
        }
    },
    games: {
        anchorUrlPattern: /https:\/\/(en|ru).wikipedia.org\/wiki\//g
    }
}
