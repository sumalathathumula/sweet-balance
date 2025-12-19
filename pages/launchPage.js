export class launchPage{
    constructor(page){
        this.page = page;

        this.appName= page.getByText('SweetBalance');     
       

    }
    async goto() {
        console.log('Navigating to the launch page' + this.page.url());
        
        await this.page.goto('/FirstPage');

    }
    async verifyAppName() {
        //await this.appName.waitFor();
         return (await this.appName.innerText()).trim()
        //console.assert(appNameText === 'SweetBalance', `Expected app name to be 'SweetBalance', but got '${appNameText}'`);
    }
}