class Page {
    
    async navigate(path = '') {
        await browser.url(path);
        await browser.waitUntil(async () => (await browser.execute(() => document.readyState)) === 'complete', {
            timeout: 20000,
            timeoutMsg: 'Page did not load completely'
        });
    }
}

export default Page;