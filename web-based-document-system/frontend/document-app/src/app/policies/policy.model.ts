export interface policy {

    _id:string;
    departmentName:string;
    Purpose: string;
    Terms:string;
    Scope: string;
    Limitations:string;
   
   
    dateUploaded: string;
    commentbox:string;
    
    allMedia?:string;
  mediaFiles:[];

version: number;
lastEditedBy?: string;

  }