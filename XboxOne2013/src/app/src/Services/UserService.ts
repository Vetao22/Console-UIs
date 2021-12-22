import { XboxNotification } from "../Models/Notification";
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

        this.SetNotifications();
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

        user = new User();
        user.Name = 'José';
        user.Surname = 'Silva';
        user.Online = true;
        user.Gamerscore = '500.000';
        user.Messages = '5';
        user.ProfilePicUrl = '../../assets/Users/Profile2.png';

        this.AddUser(user);
    }

    SetNotifications()
    {        
        let user = this.Users[0];
        let user2 = this.Users[1]

        if(!user)
        {
            return;
        }

        let date = new Date(Date.now());
            
        let notification = new XboxNotification(user2, 'started using Upload', date);
        user.Notifications.push(notification);

        date.setDate(date.getDate() + 3);
        notification = new XboxNotification(user2, 'started using Skype', date);
        user.Notifications.push(notification);

        date.setDate(date.getDate() + 1);
        notification = new XboxNotification(user2, 'started watching TV', date);
        user.Notifications.push(notification);

        date.setDate(date.getDate() + 2);
        notification = new XboxNotification(user2, 'started playing Forza', date);
        user.Notifications.push(notification);

        date.setDate(date.getDate() + 2);
        notification = new XboxNotification(user2, 'started playing Fifa 14', date);
        user.Notifications.push(notification);

        date.setDate(date.getDate() + 1);
        notification = new XboxNotification(user2, 'started using Skydrive', date);
        user.Notifications.push(notification);

        date.setDate(date.getDate() + 3);
        notification = new XboxNotification(user2, 'started using Xbox Music', date);
        user.Notifications.push(notification);

        date.setDate(date.getDate() + 3);
        notification = new XboxNotification(user2, 'started using Machinima', date);
        user.Notifications.push(notification);      
    }
}