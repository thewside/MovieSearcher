export const getURLParams = () => {
    const url = new URL(window.location.href);  //?title=iron%20man&p=3
    const title = url.searchParams.get('title');
    const p = url.searchParams.get('p') || 1;
    return {
        title: title,
        p: p,
        url: `/?title=${title}&p=${p}`
    }
};