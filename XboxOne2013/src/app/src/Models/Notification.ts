import { User } from "./User";

export class XboxNotification
{
    SourceUser: User;
    Time: Date;
    Message: string;

    constructor(sourceUser: User, message: string, time: Date)
    {
        this.SourceUser = sourceUser;
        this.Time = time;
        this.Message = message;
    }
}