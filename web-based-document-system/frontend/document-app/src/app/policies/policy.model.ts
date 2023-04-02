export interface policy {

    _id:string;
    departmentName:string;
    Purpose: string;
    Terms:string;
    Scope: string;
    Limitations:string;
   
   
    dateUploaded: string;
    commentbox:string;
    
  IncidentPicture?:string;
  mediaFiles:[];

version: number;
lastEditedBy?: string;

  }