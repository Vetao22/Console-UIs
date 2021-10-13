import { XboxAppTile } from "./XboxAppTIle";

export class User
{
    Name: string | null;
    Surname: string | null;
    Gamerscore: string | null;
    Messages: string | null;
    Online: boolean;
    ProfilePicUrl: string | null;

    Friends: Array<User>;
    Followers: Array<User>
    Pins: Array<XboxAppTile>;

    constructor()
    {
        this.Name = null;
        this.Surname = null;
        this.Gamerscore = null;
        this.Messages = null;
        this.Online = false;
        this.ProfilePicUrl = null;
        
        this.Friends = new Array<User>();
        this.Followers = new Array<User>();
        this.Pins = new Array<XboxAppTile>();
    }
}