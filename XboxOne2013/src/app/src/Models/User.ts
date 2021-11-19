import { XboxAppService } from "../Services/XboxAppService";
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

    AddPin(xboxApp: XboxAppTile | null)
    {
        if(xboxApp)
        {
            this.Pins.push(xboxApp);
        }
    }

    AddPinByName(xboxAppName: string)
    {
        let xboxAppService = new XboxAppService();
        let xboxApp = xboxAppService.Search(xboxAppName);

        if(xboxApp)
        {
            this.Pins.push(xboxApp);
        }
    }

    AddFriend(friend: User | null)
    {
        if(friend)
        {
            this.Friends.push(friend);
        }
    }

    AddFollower(follower: User | null)
    {
        if(follower)
        {
            this.Followers.push(follower);
        }
    }

    SetGamerscore(gamerscore: string)
    {
        if(gamerscore && !isNaN(Number(gamerscore)))
        {
            this.Gamerscore = gamerscore;
        }
    }

    GetOnlineFriendsCount(): string
    {
        let onlineFriends = this.Friends.filter(f => f.Online).length;

        return onlineFriends.toString();
    }
}