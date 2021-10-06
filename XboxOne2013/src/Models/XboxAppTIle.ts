
export class XboxAppTile
{
    Name: string;
    IconUrl?: string;
    BackgroundImgUrl?: string;

    //Hexadecimal color
    BackgroundColor?: string;

    constructor(name: string)
    {
        this.Name = name;
    }
}