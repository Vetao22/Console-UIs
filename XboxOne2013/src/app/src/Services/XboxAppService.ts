import { XboxAppTile } from "../Models/XboxAppTIle";

export class XboxAppService
{
    Apps: Array<XboxAppTile>;

    constructor()
    {
        this.Apps = new Array<XboxAppTile>();

        this.Load();
    }

    Load(): void
    {
        let app = new XboxAppTile();
        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Skype';
        app.BackgroundColor = '#00aff0';
        app.IconUrl = '../../assets/SkypeLogo.png';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Hulu Plus';
        app.BackgroundColor = '#8bd738';
        app.IconUrl = '../../assets/HuluPlusLogo.png';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Upload';
        app.BackgroundColor = '#0a3596';
        app.IconUrl = '../../assets/UploadLogo.png';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Internet Explorer';
        app.BackgroundColor = '#00abdc';
        app.IconUrl = '../../assets/InternetExplorerLogo.png';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Xbox Video';
        app.BackgroundColor = '#009900';
        app.IconUrl = '../../assets/XboxVideoLogo.png';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Netflix';
        app.BackgroundColor = '#b90002';
        app.IconUrl = '../../assets/NetflixLogo.png';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'TV';
        app.BackgroundColor = '#0a3596';
        app.IconUrl = '../../assets/TvLogo.png';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Xbox Music';
        app.BackgroundColor = '#009900';
        app.IconUrl = '../../assets/XboxMusicLogo.png';

        this.Apps.push(app);
        
        app = new XboxAppTile();
        app.Name = 'People';
        app.BackgroundColor = '#009b01';
        app.IconUrl = '../../assets/PeopleLogo.png';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'SkyDrive';
        app.BackgroundColor = '#0b49b1';
        app.IconUrl = '../../assets/SkyDriveLogo.png';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Killer Instinct';
        app.BackgroundImgUrl = '../../assets/KillerInstinctLogo.png'

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Upload Studio';
        app.BackgroundImgUrl = '../../assets/UploadStudioLogo.png'

        this.Apps.push(app);
        
        app = new XboxAppTile();
        app.Name = 'Kill Bill';
        app.BackgroundImgUrl = '../../assets/KillBillLogo.jpeg'

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Dead Rising 3';
        app.BackgroundImgUrl = '../../assets/DeadRising3Logo.png'

        this.Apps.push(app);

        
        app = new XboxAppTile();
        app.Name = 'The Crew';
        app.BackgroundImgUrl = '../../assets/TheCrewLogo.png'

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Snap';
        app.IconUrl = '../../assets/SnapLogo.png'
        app.BackgroundColor = '#0a3596';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'My Games';
        app.IconUrl = '../../assets/MyGamesAndAppsLogo.png'
        app.BackgroundColor = '#0a3596';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'NFL';
        app.IconUrl = '../../assets/NFL_Logo.png'
        app.BackgroundColor = '#000a1e';

        this.Apps.push(app);

        app = new XboxAppTile();
        app.Name = 'Insert Disc';
        app.IconUrl = '../../assets/DiscLogo.png'
        app.BackgroundColor = '#0a3596';

        this.Apps.push(app);
    }

    Search(appName: string): XboxAppTile | null
    {
        let index = this.Apps.findIndex(a => a.Name?.toLowerCase() == appName.toLowerCase());

        if(index)
        {
            return this.Apps[index];
        }

        return null;
    }
}