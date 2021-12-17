export class PersonClass {
    //These are public properties
    // Users can access these from the browser
    public firstName: string;
    public lastName: string;
    // Users can not access these
    private age: boolean;
    //this variable is accessible to the public but it can not be changed
    readonly id: number;

    // this determitsns what data can be passed in when creating a new instance of this object
    constructor(data) {
        this.firstName = data.firstName
    }
    // Public functions
    public  setName (first: string, last: string) : string {
        this.firstName = first;
        this.lastName = last;
        return this.firstName + ' ' + this.lastName
    }
    // PRivate functions
    private checkForId () : boolean {
        if(this.id) {
            return true;
        } else {
            return false;
        }
    }
}