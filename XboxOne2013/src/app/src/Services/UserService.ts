import { User } from "../Models/User";
import { XboxAppService } from "./XboxAppService";

export class UserService
{
    Users: Array<User>;

    LoggedUser: User;

    constructor()
    {
        this.Users = new Array<User>();

        this.Load();

        this.LoggedUser = this.Users[0];
    }

    AddUser(user: User)
    {
        if(user)
        {
            this.Users.push(user);
        }
    }

    Search(name: string) : User | null
    {
        let user = this.Users.find(u => u.Name?.toLocaleLowerCase() == name.toLowerCase());

        if(user)
        {
            return user;
        }

        return null;
    }

    Load()
    {
        let xboxAppService = new XboxAppService();

        let user = new User();
        user.Name = 'Jorisvaldo';
        user.Surname = 'Silva';
        user.Online = true;
        user.Gamerscore = '150.000';
        user.Messages = '5';
        user.ProfilePicUrl = '../../assets/Users/Profile.png';

        user.AddPin(xboxAppService.Search('Skype'));
        user.AddPin(xboxAppService.Search('Hulu Plus'));
        user.AddPin(xboxAppService.Search('Upload'));
        user.AddPin(xboxAppService.Search('Killer Instinct'));
        user.AddPin(xboxAppService.Search('Upload Studio'));
        user.AddPin(xboxAppService.Search('Internet Explorer'));
        user.AddPin(xboxAppService.Search('Xbox Video'));
        user.AddPin(xboxAppService.Search('Netflix'));
        user.AddPin(xboxAppService.Search('The Crew'));
        user.AddPin(xboxAppService.Search('Kill Bill'));
        user.AddPin(xboxAppService.Search('TV'));
        user.AddPin(xboxAppService.Search('Xbox Music'));
        user.AddPin(xboxAppService.Search('People'));
        user.AddPin(xboxAppService.Search('SkyDrive'));
        user.AddPin(xboxAppService.Search('Dead Rising 3'));

        this.AddUser(user);
    }
}