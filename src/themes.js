export const themeLight = {
    global: {
        backgroundColor: 'var(--color-lightest)',
        textColor: 'var(--color-dark)',
        linkColor: 'var(--color-link-basic)'
    },
    appHeader: {
        backgroundColor: 'var(--color-lightest)',
        borderColor: 'var(--color-light)'
    },
    appTitle: {
        linkColor: 'var(--color-darkest)'
    },
    appNav: {
        linkColor: 'var(--color-link-basic)'
    },
    appMain: {
        backgroundColor: 'var(--color-lightest)'
    },
    appFooter: {
        backgroundColor: 'var(--color-lightest)',
        borderColor: 'var(--color-light)'
    },
    appCopyright: {
        linkColor: 'var(--color-link-basic)'
    },
    timelineTable: {
        borderColor: 'var(--color-light)',
        cellBackgroundColor: 'var(--cell-background-color-basic)',
        quarterColor: 'var(--color-darkest-rgb)'
    },
    timelineGame: {
        backgroundColor: 'var(--color-darkest)',
        releaseUnknownBackgroundColor: 'var(--game-release-unknown-background-color-basic)',
        titleColor: 'var(--color-lightest)',
        titleLinkColor: 'var(--color-lightest)',
        titleLinkHoverColor: 'var(--color-darkest)',
        titleLinkHoverBackgroundColor: 'var(--color-lightest)',
        titleExpansionColor: 'var(--color-darkest)',
        titleExpansionLinkColor: 'var(--color-darkest)',
        titleExpansionLinkHoverColor: 'var(--color-lightest)',
        titleExpansionLinkHoverBackgroundColor: 'var(--color-darkest)',
        titleReleaseUnknownLinkHoverColor: 'var(--color-dark)',
        anchorBackgroundColor: 'var(--color-lightest-rgb)',
        anchorIconFilter: 'invert(0)'
    }
};

export const themeDark = {
    global: {
        backgroundColor: 'var(--color-darkest)',
        textColor: 'var(--color-muted)',
        linkColor: 'var(--color-link-muted)'
    },
    appHeader: {
        backgroundColor: 'var(--color-darkest)',
        borderColor: 'var(--color-dark)'
    },
    appTitle: {
        linkColor: 'var(--color-lightest)'
    },
    appNav: {
        linkColor: 'var(--color-link-muted)'
    },
    appMain: {
        backgroundColor: 'var(--color-darkest)',
    },
    appFooter: {
        backgroundColor: 'var(--color-darkest)',
        borderColor: 'var(--color-dark)'
    },
    appCopyright: {
        linkColor: 'var(--color-link-muted)'
    },
    timelineTable: {
        borderColor: 'var(--color-dark)',
        cellBackgroundColor: 'var(--cell-background-color-inverse)',
        quarterColor: 'var(--color-lightest-rgb)'
    },
    timelineGame: {
        backgroundColor: 'var(--color-lightest)',
        releaseUnknownBackgroundColor: 'var(--game-release-unknown-background-color-inverse)',
        titleColor: 'var(--color-darkest)',
        titleLinkColor: 'var(--color-darkest)',
        titleLinkHoverColor: 'var(--color-lightest)',
        titleLinkHoverBackgroundColor: 'var(--color-darkest)',
        titleExpansionColor: 'var(--color-lightest)',
        titleExpansionLinkColor: 'var(--color-lightest)',
        titleExpansionLinkHoverColor: 'var(--color-darkest)',
        titleExpansionLinkHoverBackgroundColor: 'var(--color-lightest)',
        titleReleaseUnknownLinkHoverColor: 'var(--color-light)',
        anchorBackgroundColor: 'var(--color-darkest-rgb)',
        anchorIconFilter: 'invert(1)'
    }
}
