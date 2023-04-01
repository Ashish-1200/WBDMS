export interface policy {

    _id:string;
    departmentname:string;
    Purpose: string;
    Terms:string;
    Scope: string;
    Limitations:string;
   
   
    dateuploaded: string;
    commentbox:string;
    
  IncidentPicture?:string;
  mediaFiles:[];

version: number;
lastEditedBy?: string;

  }